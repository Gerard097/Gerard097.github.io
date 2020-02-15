import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Typist from "react-typist";
import Palette from '../styles/palette'

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const STypist = styled(Typist)`
    color: ${Palette.secondary};
    font-size: 3rem;
    font-family: consolas;
   
    align-self: flex-start;
    user-select: none;
    display: inline;
`

const SSpan = styled.div`
    color: ${Palette.primaryVariant};
    font-size: 3rem;
    font-family: consolas;
    
    align-self: flex-end;
    text-shadow:0px 0px 0.5rem ${Palette.primaryVariant};
    user-select: none;
    display: inline;
`

const TextCenterd = styled.div`
    padding: 10rem 2rem;
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

console.log(chars);

const NextRandomChar = size => {
    let idx = cIndex;

    cIndex += size;

    if (cIndex >= chars.length) {
        idx = chars.length - size;
        cIndex = 0;
    }

    return chars.substr(idx, size);
}

const titles = ["Gamer", "Software Engineer", "Web Developer", "Game Developer", "Dreamer", "Wizard", "Coder", "Traveler", "C++ Nerd", "Team Player"];

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
    }

    componentDidMount() {
        this.randomizeTitle(this);
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

    randomizeTitle(self) {

        if (self) {
            
            //console.log(self.state);

            const validIndices = self.state.stateIndex === 0 || self.state.stateIndex === 1;

            if (validIndices) {
                
                const {currentTitle, titleFormat } = self.state;
                let newTitle = "";
                for (let i = 0; i < currentTitle.length; ++i) {
                    if (i >= titleFormat.length || titleFormat[i] === 0) {
                        newTitle += NextRandomChar(1);
                    }
                    else {
                        newTitle += currentTitle[i];
                    }
                }

                self.setState({currentTitle: newTitle});
            }

            setTimeout(self.randomizeTitle, 50, self);
        }
    }

    triggerRandomTitle() {       

        const setRandom = () => {
            //While not showcasing
            if (this) {

                let index = this.state.stateIndex;
                
                let stepDuration = 100;

                if (index === stepStates["target"]) {

                    let current = this.state.currentTitle;

                    const target = this.state.targetTitle;

                    let diff = target.length - current.length;

                    //If last title has the same lenght as current
                    if (diff === 0) {
                        this.setState({stateIndex : stepStates["reveal"]});
                        //Give 2.5 seconds before revealing
                        stepDuration = 2500;
                    }
                    else {
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

                        stepDuration = 150;

                        const nextReveal = revealIndices.splice(0, 1)[0];

                        const {currentTitle, targetTitle, titleFormat} = this.state;
                        
                        let title = currentTitle.replaceAt(nextReveal, targetTitle[nextReveal]);
                        let format = titleFormat.slice();
                        
                        format[nextReveal] = 1;

                        this.setState({currentTitle: title, titleFormat: format});
                    }
                    else {
                        console.log("Showcase");
                        stepDuration = 4000;
                        this.setState({stateIndex : stepStates["showcase"]});
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

        const randomTitleDuration = 1000;

        //setTimeout(() => { if (this) this.selectTitle() }, randomTitleDuration);
        setTimeout(setRandom, 150);
    }

    render() {

        return (
        <Layout mainStyle={{alignItems:"flex-start", justifyContent: "flex-start"}}>
            <TextCenterd>
                <STypist
                    startDelay={650}
                    onTypingDone={() => this.selectTargetTitle()}
                    cursor={{show:true, hideWhenDone: true, hideWhenDoneDelay: 0}}
                >
                    Hi.
                    <Typist.Delay ms={700}/> 
                    {` My name is Gerardo, `}
                    <Typist.Delay ms={350}/> 
                    {`and I'm a`}
                </STypist>
                <SSpan>{" " + this.state.currentTitle}</SSpan>
            </TextCenterd>            
        </Layout>
        )
    }
}

export default IndexPage;
