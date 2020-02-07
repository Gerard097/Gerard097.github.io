import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Typist from "react-typist";
import Palette from '../styles/palette'

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

const Shuffle = str => {
    
    let s = str.split('').sort(function(){return 0.5-Math.random()}).join('');

    return s;
}

let randomSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$@&%?';
let chars = Shuffle(randomSet) + Shuffle(randomSet) + Shuffle(randomSet);
let cIndex = 0;

console.log(chars);

const RandomTitle = size => {
    let idx = cIndex;

    cIndex += size;

    if (cIndex >= chars.length) {
        idx = chars.length - size;
        cIndex = 0;
    }

    return chars.substr(idx, size);
}

const titles = ["Gamer", "Software Engineer", "Web Developer", "Game Developer", "Dreamer", "Wizard", "Coder", "Traveler", "C++ Nerd", "Team Player"];

let indices = Array.apply(null, Array(titles.length)).map((v, i) => i);

class IndexPage extends React.Component 
{

    constructor(props) {
        super(props);

        this.state = {
            currentTitle: "",
            showRandomDigits: true
        }
    }

    selectTitle() {

        if (indices.length === 0) {
            indices = Array.apply(null, Array(titles.length)).map((v, i) => i);
        }
        
        const index = Math.floor(Math.random() * indices.length);;

        this.setState({showRandomDigits: false, currentTitle: " " + titles[indices[index]]});

        indices.splice(index, 1);

        setTimeout(() => {
            if (this) {
                this.setState({showRandomDigits: true}, () => {this.triggerRandomTitle()});
            }
        }, 5000);
    }

    triggerRandomTitle() {       

        const setRandom = () => {
            if (this && this.state.showRandomDigits) {
                this.setState({currentTitle: " " + RandomTitle(7)});
                //Random tittle animation duration
                setTimeout(setRandom, 50);
            }
        }
        setTimeout(() => { if (this) this.selectTitle() }, 1200);
        setTimeout(setRandom, 50);
    }

    render() {

        return (
        <Layout mainStyle={{alignItems:"flex-start", justifyContent: "flex-start"}}>
            <TextCenterd>
                <STypist
                    startDelay={300}
                    onTypingDone={() => this.triggerRandomTitle()}
                    cursor={{show:false}}
                >
                    Hi.
                    <Typist.Delay ms={650}/> 
                    {` My name is Gerardo, `}
                    <Typist.Delay ms={250}/> 
                    {`and I'm a`}
                </STypist>
                <SSpan>{this.state.currentTitle}</SSpan>
            </TextCenterd>            
        </Layout>
        )
    }
}

export default IndexPage;
