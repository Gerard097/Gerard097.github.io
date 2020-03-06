import React from "react"
import {skills} from '../data/skills-info'
import styled from "styled-components";
import {Rating} from '@material-ui/lab'
import Carousel from "react-multi-carousel";
import { LinearProgress } from "@material-ui/core";
import "react-multi-carousel/lib/styles.css";

import './skills.css'

const BarRating = styled(LinearProgress)`
    
`

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
        offsetClick: 3
    },
    tablet: {
        breakpoint: { max: 1230, min: 600 },
        items: 3,
        paritialVisibilityGutter: 0,
        offset: 5,
        offsetClick: 2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        paritialVisibilityGutter: 0,
        offset: 2,
        offsetClick: 1
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
        firstIndex: 0,
        autoPlay: false,
        autoPlaySpeed: 4500,
        nextRate: 1
    }

    constructor(props) {
        
        super(props);

        //this.enableBefore = true;

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
            return (<div key={index}>
                    <img 
                        onClick={() => { 
                            if (this.Carousel.state.currentSlide !== generalIndex) {
                                //Used to avoid inmediate changing to following skill after clicking on this
                                const offsetClick = responsive[this.Carousel.state.deviceType].offsetClick;
                                this.setState({autoPlay: false, currentIndex: generalIndex+offsetClick}, ()=>setTimeout(this.setState({autoPlay:true}), 50));
                                this.Carousel.goToSlide(generalIndex, true);
                            }
                        }}
                         
                        src={skills[skill].img} 
                        alt=''/>
                    <BarRating variant="determinate" value={this.state.nextRate === 0 ? 0 : skills[skill].rate / 5 * 100} color="secondary"/>
                    </div>
            )
        });
        console.log(this.areaCarousel ? this.areaCarousel.state.currentSlide : null);
        return (
          <SkillTarget
            index={this.state.currentIndex}
            className="root-container">
            <Carousel
                swipeable={false}
                draggable={false}
                afterChange={() => { this.setState({nextRate:1}); }}
                beforeChange={() => { this.setState({nextRate:0}); }}
                ref={r => this.areaCarousel = r}
                responsive={{
                    mobile: { 
                        breakpoint: { max: 3000, min: 0 },
                        items: 1,
                    }
                }}
                // additionalTransfrom={-250 + this.areaCarousel ? -this.areaCarousel.state.currentSlide*50 : 0}
                infinite
                itemClass="skill-area-item"
                containerClass="skill-area-root"
                showDots={false}
                autoPlay={false}
            >
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
            </Carousel>
            {/* <div className="skill-area-root">
            </div> */}
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={showDots()}
                // focusOnSelect
                arrows={false}
                onDrag={()=>console.log("Moving")}
                slidesToSlide={1}
                containerClass="container-imp"
                itemClass="slide-imp"
                sliderClass="slider-container-imp"
                infinite
                autoPlay={/*this.state.firstIndex !== 1 ? true : false*/this.state.autoPlay}
                autoPlaySpeed={/*this.state.firstIndex === 0 ? 100 : */this.state.autoPlaySpeed}
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
                ref={(el) => { 
                    this.Carousel = el;
                    if (this.state.autoPlay === false && this.Carousel) {
                        setTimeout(()=>{ this.Carousel.goToSlide(0); this.setState({autoPlay:true}) }, 50);
                    }
                }}
                >
              {Skills}
            </Carousel>
          </SkillTarget>
        )
    }
}

export default SkillsPage;
