import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Typist from "react-typist";
import Palette from '../styles/palette'

const STypist = styled(Typist)`
    color: ${Palette.secondary};
    font-size: 3rem;
    font-family: consolas;
    padding: 2rem 4rem;
    align-self: flex-start;
    user-select: none;
`

const SSpan = styled.span`
    color: ${Palette.primaryVariant};
    font-size: 3rem;
    font-family: consolas;
    padding: 2rem 4rem;
    align-self: flex-start;
    text-shadow:0px 0px 0.5rem ${Palette.primaryVariant};
    user-select: none;

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

const titles = ["Gamer", "Software Engineer", "Web Developer", "Game Developer", "Dreamer", "Magician", "Coder", "Traveler", "C++ Nerd", "Team Player"];

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

        this.setState({showRandomDigits: false, currentTitle: titles[indices[index]]});

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
                this.setState({currentTitle: RandomTitle(7)});
                setTimeout(setRandom, 50);
            }
        }
        setTimeout(() => { if (this) this.selectTitle() }, 1200);
        setTimeout(setRandom, 50);
    }

    render() {

        return (
        <Layout>
            <div>
            <STypist
                onTypingDone={() => this.triggerRandomTitle()}
                cursor={{show:false}}
            >
                Hi. My name is Gerardo, and I'm a
            </STypist>
            <SSpan>{this.state.currentTitle}</SSpan>
            </div>
        </Layout>
        )
    }
}

export default IndexPage;
