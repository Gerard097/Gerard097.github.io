import React from "react"
import {skills} from '../data/skills-info'
import styled from "styled-components";
import {Rating} from '@material-ui/lab'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './skills.css'

const SkillTarget = styled.div`
    .slide-imp:nth-child(${props => props.index}) > div {
        transform: scale(1.2) translateY(-2.5rem);
    }

    .slide-imp:nth-child(${props => props.index}) > div > div.slide-card-top {
        opacity: 1;
    }

    .slide-imp:nth-child(${props => props.index}) > div > span.MuiRating-root {
        opacity: 1;
    }

    .slide-imp > div > span.MuiRating-root > span {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
    
    .slide-imp:nth-child(${props => props.index}) > div > span.MuiRating-root > span:nth-child(1) {
        opacity: 1;
        transition: opacity 0.25s ease-in-out 0.5s;
    }
    
    .slide-imp:nth-child(${props => props.index}) > div > span.MuiRating-root > span:nth-child(2) {
        opacity: 1;
        transition: opacity 0.25s ease-in-out 0.75s;
    }
    
    .slide-imp:nth-child(${props => props.index}) > div > span.MuiRating-root > span:nth-child(3) {
        opacity: 1;
        transition: opacity 0.25s ease-in-out 1s;
    }
    
    .slide-imp:nth-child(${props => props.index}) > div > span.MuiRating-root > span:nth-child(4) {
        opacity: 1;
        transition: opacity 0.25s ease-in-out 1.25s;
    }
    
    .slide-imp:nth-child(${props => props.index}) > div > span.MuiRating-root > span:nth-child(5) {
        opacity: 1;
        transition: opacity 0.25s ease-in-out 1.5s;
    }

    .slide-imp:nth-child(${props => props.index + 1}) > div {
        transform: rotateY(45deg) scale(0.8);
    }

    .slide-imp:nth-child(${props => props.index - 1}) > div {
        transform: rotateY(-45deg) scale(0.8);
    }

    .MuiRating-root > span > span {
        left: 0;
    }

    .MuiRating-iconEmpty {
        color: rgba(255, 255, 255, 0.26);
    }

    .MuiRating-root {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
`

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1230 },
        items: 5,
        paritialVisibilityGutter: 0,
        offset: 8,
    },
    tablet: {
        breakpoint: { max: 1230, min: 600 },
        items: 3,
        paritialVisibilityGutter: 0,
        offset: 5,
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        paritialVisibilityGutter: 0,
        offset: 2
    }
};

const SkillCard = ({className, name, img, rate, index, }) => (
    <div className={`slide-card-out ${className ? className : ''}`}>
        <div className="slide-card-top">{name}</div>
        <Rating
            size="small"
            name="half-rating-read"
            readOnly
            precision={0.5}
            max={5}
            value={rate}/>
        <div className="slide-inner">
            <img className='slide-img' src={img} alt=''/>
        </div>
    </div>
);

class SkillsPage extends React.Component 
{

    state = {
        currentIndex: 8,
        firstIndex: 0
    }

    constructor(props) {
        
        super(props);

        this.skillAreas = {};

        this.skillRefs = []

        Object.keys(skills).forEach((key, index) => {

            skills[key].index = index;

            const areas = skills[key].tags;
            
            areas.forEach((area) => { 
                if (!this.skillAreas[area]) {
                    this.skillAreas[area] = [];
                }
                this.skillAreas[area].push(key);
            });
        });
    }

    render() {

        const Skills = Object.keys(skills).map((key, index) => {
            const {img, rate} = skills[key];
        return (<SkillCard rate={rate} className={key.split(' ').join('-')} img={img} key={index} name={key}/>);
        });

        const showDots = () => { return false; }

        const getSkills = (area) => this.skillAreas[area].map((skill, index) => {
            const generalIndex = skills[skill].index + (this.Carousel ? responsive[this.Carousel.state.deviceType].offset : 0);
            return <img onClick={() => { 
                            if (this.Carousel.state.currentSlide !== generalIndex) this.Carousel.goToSlide(generalIndex);
                        }}
                        key={index} 
                        src={skills[skill].img} 
                        alt=''/>
        });

        return (
          <SkillTarget
            index={this.state.currentIndex}
            className="root-container">
            <div className="skill-area-root">
                <div className="skill-area-container">
                    <p>Frontend</p>
                    <div>
                        {getSkills("frontend")}
                    </div>
                </div>
                <div className="skill-area-container">
                    <p>Backend</p>
                    <div>
                        {getSkills("backend")}
                    </div>
                </div>
                <div className="skill-area-container">
                    <p>Game Development</p>
                    <div>
                        {getSkills("gamedev")}
                    </div>
                </div>
                <div className="skill-area-container">
                    <p>Tools</p>
                    <div>
                        {getSkills("tools")}
                    </div>
                </div>
                <div className="skill-area-container">
                    <p>Soft Skills</p>
                    <div>
                        {getSkills("softskills")}
                    </div>
                </div>
            </div>
            <Carousel
                showDots={showDots()}
                // focusOnSelect
                arrows={false}
                slidesToSlide={1}
                containerClass="container-imp"
                itemClass="slide-imp"
                sliderClass="slider-container-imp"
                infinite
                autoPlay={this.state.firstIndex !== 1 ? true : false}
                autoPlaySpeed={this.state.firstIndex === 0 ? 100 : 4500}
                afterChange={(prev, state) => {
                    if (this.state.firstIndex !== 2) this.setState({firstIndex:1}, () => {this.setState({firstIndex: 2})});
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
