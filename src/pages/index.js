import React, { useRef } from "react"
import styled from "styled-components"

//import Layout from "../components/layout"
import Typist from "react-typist";
import Palette from '../styles/palette'

import laptop from '../images/laptop.svg';
import { Box } from "@material-ui/core";
//import { StaticImage } from "gatsby-plugin-image";

// eslint-disable-next-line no-extend-native
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const STypist = styled(Typist)`
    color: ${props => props.color ?? Palette.secondary};
    font-family: consolas;
    text-align: center;
    align-self: center;
    user-select: none;
    display: inline;

    font-size: ${props => (props.fontSizeRem ?? 2)*1.25+'rem'};

    @media(max-width: 800px) {
        font-size: ${props => (props.fontSizeRem ?? 2)+'rem'};
    }
`

const SSpan = styled.div`
    color: ${Palette.primaryVariant};
    font-size: 2.1rem;
    font-family: consolas;
    text-align: center;
    align-self: center;
    text-shadow:0px 0px 0.5rem ${Palette.primaryVariant};
    user-select: none;
    display: block;
`

const TextCenterd = styled.div`
    margin-bottom: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10rem;
    
    @media(max-height: 680px) {
        margin-top: 5rem;
    }

    @media(max-width: 660px) {
        margin-top: 5rem;
        min-height: 5rem;
    }
`

const MainContainer = styled(Box)`
    display: flex;
    //width: 100%;
    height: 100%;
    width: calc(100% - 3rem);
    flex-direction: column;

    justify-content: space-between;

    @media(max-width: 660px) {
        justify-content: flex-start;
    }
`

const ShuffleArray = a => {

    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
}

const Shuffle = str => {
    
    let s = str.split('').sort(function(){return 0.5-Math.random()}).join('');

    return s;
}

let randomSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$@&%?';
let chars = Shuffle(randomSet) + Shuffle(randomSet) + Shuffle(randomSet);
let cIndex = 0;

//console.log(chars);

const NextRandomChar = size => {
    let idx = cIndex;

    cIndex += size;

    if (cIndex >= chars.length) {
        idx = chars.length - size;
        cIndex = 0;
    }

    return chars.substr(idx, size);
}

const titles = [
    "Gamer", 
    "Software Engineer",
    "Fullstack Developer", 
    "Game Developer", 
    "Dreamer", 
    "Wizard", 
    "Coder", 
    "Traveler", 
    "C++ Nerd", 
    "Team Player", 
    "Entrepreneur", 
    "Creator",
    "Problem Solver"
    // "Investor"
];

let indices = [];

const stepStates = {"target" : 0, "reveal" : 1, "showcase" : 2};

let revealIndices = [];

//3 Steps 
//1.- Fill the string with the character count of the title 
//    i.e |Gamer| = 5 -> target example |$Ax2l| = 5
//    in Case of a lower count string remove from right
//2.- Start Showing letter by letter the title 
//    i.e Frame 1 $Ax2l -> Frame 2 1aAxO -> Frame 3 !a$Br -> Frame 4 Ga#pr -> Frame 5 Gamkr -> Frame 6 Gamer
//3.- Wait X Seconds and Repeat

class IndexPage extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            currentTitle: "",
            targetTitle: "",
            titleFormat: "",
            stateIndex: -1//nothing
        }

        this.targetDifference = 0;
    }

    componentDidMount() {
        this.mounted = true;
        setTimeout(() => this.randomizeTitle(), 100);
    }

    componentWillUnmount() {
        //console.log("Unmount")
        this.mounted = false;
    }

    selectTargetTitle() {

        if (indices.length === 0) {
            indices = Array.apply(null, Array(titles.length)).map((v, i) => i);
            ShuffleArray(indices);
        }
        
        const index = indices.splice(0, 1)[0];

        const target = titles[index];

        //0 Means it can be replaced, 1 It can't
        const format = new Array(target.length).fill(0);

        revealIndices = Array.apply(null, Array(format.length)).map((v, i) => i);
        ShuffleArray(revealIndices);

        const state = {targetTitle: target, stateIndex: stepStates["target"], titleFormat: format};

        this.setState(state, () => { this.triggerRandomTitle()});
    }

    randomizeTitle() {

        if (this.mounted) {            

            const validIndices = this.state.stateIndex === 0 || this.state.stateIndex === 1;

            if (validIndices) {
                
                const { currentTitle, titleFormat, targetTitle } = this.state;
                let newTitle = "";
                for (let i = 0; i < currentTitle.length; ++i) {
                    
                    if (i < targetTitle.length) {
                        if (targetTitle[i] === ' ') {
                            newTitle += " ";
                            continue;
                        }
                        else if (titleFormat[i] !== 0) {
                            newTitle += currentTitle[i];
                            continue;
                        }
                    }

                    newTitle += NextRandomChar(1);
                }

                this.setState({currentTitle: newTitle});
            }

            setTimeout(() => this.randomizeTitle(), 50);
        }
    }

    triggerRandomTitle() {       

        const setRandom = () => {
            //While not showcasing
            if (this.mounted) {

                let index = this.state.stateIndex;
                
                let stepDuration = 100;

                if (index === stepStates["target"]) {

                    let current = this.state.currentTitle;

                    const target = this.state.targetTitle;

                    let diff = target.length - current.length;

                    if (this.targetDifference === 0) {
                        this.targetDifference = Math.abs(diff);
                    }

                    //If last title has the same lenght as current
                    if (diff === 0) {
                        this.setState({stateIndex : stepStates["reveal"]});
                        //Give 2.5 seconds before revealing
                        stepDuration = 750;
                    }
                    else {

                        stepDuration = 750 / this.targetDifference;

                        let append = diff > 0 ? true : false;

                        if (append) {
                            current += NextRandomChar(1);
                        }
                        else {
                            current = current.substr(0, current.length - 1);
                        }

                        this.setState({currentTitle: current});

                        if (target.length - current.length === 0) {
                            this.setState({stateIndex : stepStates["reveal"]});
                        }
                    }
                }
                else if (index === stepStates["reveal"]) {
                    
                    //console.log("revelea");

                    if (revealIndices.length) {
                        //Time revealing
                        //Total should be 2.3 seconds
                        
                        const nextReveal = revealIndices.splice(0, 1)[0];
                        
                        const {currentTitle, targetTitle, titleFormat} = this.state;
                        
                        let title = currentTitle.replaceAt(nextReveal, targetTitle[nextReveal]);
                        let format = titleFormat.slice();
                        
                        format[nextReveal] = 1;

                        stepDuration = 1000 / currentTitle.length;

                        //console.log(stepDuration);

                        this.setState({currentTitle: title, titleFormat: format});
                    }
                    else {
                        //console.log("Showcase");
                        //Time Showcasing
                        stepDuration = 2500;
                        this.setState({stateIndex : stepStates["showcase"]});
                        this.targetDifference = 0;
                    }
                }
                else {
                    //console.log("Time to get a new title");
                    this.selectTargetTitle();
                    //New target
                    this.setState({stateIndex : stepStates["target"]});

                    return;
                }

                setTimeout(setRandom, stepDuration);
            }
        }

        //setTimeout(() => { if (this) this.selectTitle() }, randomTitleDuration);
        setTimeout(setRandom, 150);
    }

    render() {

        return (
        <MainContainer style={{
        }}>
            <TextCenterd>
                <STypist
                    startDelay={1000}
                    onTypingDone={() => this.selectTargetTitle()}
                    cursor={{show:true, hideWhenDone: true, hideWhenDoneDelay: 0}}
                >
                    Hi,
                    <Typist.Delay ms={700}/> 
                    {` my name is Gerardo, `}
                    <Typist.Delay ms={350}/> 
                    {`and I'm a`}
                </STypist>
                <SSpan>{this.state.currentTitle}</SSpan>
            </TextCenterd>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '0 2rem',
                    maxWidth: '900px',
                    width: '100%',
                    alignSelf: 'center',
                    marginBottom: '2rem'
                }}    
            >
                <Box
                    style={{ flex: '0 0 60%' }}
                >
                {this.state.currentTitle.length >= 5 &&
                <STypist
                    color={Palette.primaryColor}
                    avgTypingDelay={50}
                    startDelay={2000}
                    fontSizeRem={1.2}
                    cursor={{
                        show: this.state.currentTitle.length > 0,
                        hideWhenDone: true
                    }}
                >
                    ... who loves creating outstanding products! During my journey as a Developer I have worked on many projects, ranging from web, mobile, and desktop applications to videogames and most recently dApps (decentralized applications).
                    <Typist.Delay ms={700}/>
                </STypist>}
                </Box>
                <Box
                    style={{
                        flex: '0 0 40%'
                    }}
                >
                <img 
                    alt="Laptop"
                    src={laptop}
                    style={{
                        //width: '30%'
                        width: '100%'
                    }}
                />
                </Box>
            </Box>
        </MainContainer>
        )
    }
}

export default IndexPage;
