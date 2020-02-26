import React from "react"
import {skills, areas} from '../data/skills-info'
import styled from "styled-components";

import Carousel from "react-multi-carousel";
import styles from "react-multi-carousel/lib/styles.css";

import './skills.css'

const MainContainer = styled.div`
    
`

const SkillTarget = styled.div`
    .slide-imp:nth-child(${props => props.index}) > div {
        transform: scale(1.2) translateY(-1.5rem);
    }

    .slide-imp:nth-child(${props => props.index + 1}) > div {
        transform: rotateY(45deg);
    }

    .slide-imp:nth-child(${props => props.index - 1}) > div {
        transform: rotateY(-45deg);
        
    }
`

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        paritialVisibilityGutter: 0,
    },
    tablet: {
        breakpoint: { max: 1024, min: 550 },
        items: 3,
        paritialVisibilityGutter: 0
    },
    mobile: {
        breakpoint: { max: 550, min: 0 },
        items: 1,
        paritialVisibilityGutter: 0
    }
};

const SkillCard = (props) => (
    <div>
        
    </div>
);

class SkillsPage extends React.Component 
{

    state = {
        currentIndex: 8,
        first: true
    }

    constructor(props) {
        super(props);
    }

    render() {
        const Skills = Object.keys(skills).map((key, index) => {
            const img = skills[key].img;
            const className = `slide-inner`

        return (<div className={className} key={index}>
                 <img className='slide-img' src={img} alt=''/>
               </div>);
        });

        return (
          <SkillTarget
            index={this.state.currentIndex}
            className="root-container">
            <Carousel
                showDots
                // focusOnSelect
                arrows={false}
                slidesToSlide={1}
                containerClass="container-imp"
                itemClass="slide-imp"
                sliderClass="slider-container-imp"
                infinite
                autoPlay={true}
                autoPlaySpeed={this.state.first ? 100 : 4000}
                afterChange={(prev, state) => {
                    if (this.state.first) this.setState({first:false});
                    const {currentSlide} = state;
                    let next = 2 - (state.slidesToShow === 1 ? 1 : state.slidesToShow === 5 ? -1 : 0);
                    if (state.currentSlide + next !== this.state.currentIndex) {
                        this.setState({currentIndex: currentSlide+next});
                    }
                }}
                beforeChange={(prev, state) => {
                    const {currentSlide} = state;
                    let next = 3 - (state.slidesToShow === 1 ? 1 : state.slidesToShow === 5 ? -1 : 0);
                    //Back
                    if (prev < currentSlide) {
                        next = 1 - (state.slidesToShow === 1 ? 1 : state.slidesToShow === 5 ? -1 : 0);
                    }
                    this.setState({currentIndex:currentSlide+next});
                }}       
                responsive={responsive}
                ref={(el) => { this.Carousel = el; }}
                >
              {Skills}
            </Carousel>
          </SkillTarget>
        )
    }
}

export default SkillsPage;
