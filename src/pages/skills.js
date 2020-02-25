import React from "react"
import {skills, areas} from '../data/skills-info'
import styled from "styled-components";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './skills.css'

const MainContainer = styled.div`
    
`

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};

class SkillsPage extends React.Component 
{
    render() {
        const Skills = Object.keys(skills).map(function(key, index) {
            const img = skills[key].img;
        return <div className='slide-inner' key={index}>
                 <img className='slide-img' src={img}/>
               </div>;
        });;

        return (
            <div style={{display:`flex`, width: `20%`}}>
                <CarouselProvider
                    infinite
                    naturalSlideWidth={1}
                    naturalSlideHeight={1}
                    totalSlides={3}
                    
                >
                    <Slider>
                        <Slide style={{backgroundColor: 'blue', color:`red`}} index={0}></Slide>
                        <Slide style={{color:`red`}} index={0} index={1}>I am the second Slide.</Slide>
                        <Slide style={{color:`red`}} index={0} index={2}>I am the third Slide.</Slide>
                    </Slider>
                </CarouselProvider>
            </div>
        )
    }
}

export default SkillsPage;
