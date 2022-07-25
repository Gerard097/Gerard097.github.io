import React from "react"
import {skills} from '../data/skills-info'
import styled from "styled-components";
import {Rating} from '@material-ui/lab'
import Carousel from "react-multi-carousel";
import { CircularProgress, Typography, Box } from "@material-ui/core";
import Palette from '../styles/palette'
import "react-multi-carousel/lib/styles.css";

import './skills.css'

import frontendLogo from '../images/front.png';

// const CircularProgressGlow = styled(CircularProgress)`
    
// `

const SkillTarget = styled.div`
    .slide-imp:nth-child(${props => props.index}) > div {
        transform: scale(1.1) translateY(-2rem);
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
            defaultValue={rate}/>
        <div className="slide-inner">
            <img className='slide-img' src={img} alt=''/>
        </div>
    </div>
);

const CircularProgressWithLabel = ({label, value, onClick}) => (
    <Box
        onClick={onClick}
        style={{
            cursor: 'pointer'
        }}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly !important',
            alignItems: 'center',
            transition: 'transform 500ms',
            margin: 'auto',
            '&:hover': {
                transform: 'scale(1.15)',
            }
        }}
    >
        <Box
            sx = {{
                position:'relative',
                display: 'inline-flex',
                flexDirection: 'column'
            }}
        >
            {/*Used to create a glow effect */}
            <CircularProgress
                style={{color: Palette.secondary}}
                className="glow-circular-progress"
                value={value} 
                variant="determinate"/>
            <CircularProgress 
                style={{color: Palette.secondary}}
                value={value} 
                variant="determinate"/>
            <Box
                sx = {{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography
                    style={{
                        userSelect: 'none',
                        color: 'white' 
                    }}
                    variant="caption"
                    component="p"
                >
                    {`${value}%`}
                </Typography>
            </Box>
        </Box>
        <Typography
                    style={{ 
                        color: 'white',
                        textAlign: 'center',
                        userSelect: 'none',
                    }}
                    variant="caption"
                    component="p"
        >
            {label}
        </Typography>
    </Box>
)

const skillSets = [
    { label: "Frontend", key: "frontend", icon: frontendLogo },
    { label: "Backend", key: "backend" },
    { label: "Game Development", key: "gamedev" },
    { label: "Tools", key: "tools" },
    { label: "Soft Skills", key: "softskills" },
    //{ label: "Blockchain", key: "blockchain" },
]

class SkillsPage extends React.Component 
{
    constructor(props) {
        
        super(props);

        //this.enableBefore = true;

        this.skillAreas = {};

        this.skillRefs = []

        let vals = {};

        Object.values(skillSets).forEach(({key}) => {
            vals[key] = false;
            this.skillAreas[key] = [];
        })

        this.state = {
            showPercentageValue: vals,
            currentIndex: 8,
            firstIndex: 0,
            autoPlay: false,
            autoPlaySpeed: 4500,
            nextRate: 1
        }

        Object.keys(skills).forEach((key, index) => {
            
            skills[key].index = index;

            const areas = skills[key].tags;
            
            areas.forEach((area) => { 
                this.skillAreas[area].push(key);
            });
        });
    }

    componentDidMount() {

        let vals = this.state.showPercentageValue;

        vals[skillSets[0].key] = true;

        setTimeout(() => {
            this.setState({ showPercentageValue: vals });
        }, 500);
    }

    render() {

        const Skills = Object.keys(skills).map((key, index) => {
            const {img, rate} = skills[key];
        return (<SkillCard rate={rate} className={key.split(' ').join('-')} img={img} key={index} name={key}/>);
        });

        const showDots = () => { return false; }

        const getSkills = (area, showPercentageValue) => this.skillAreas[area].map((skill, index) => {
            
            const generalIndex = skills[skill].index + (this.Carousel ? responsive[this.Carousel.state.deviceType].offset : 0);
            return (
            <CircularProgressWithLabel 
                key={skill} 
                label={skill} 
                value={showPercentageValue ? Math.min(skills[skill].rate * 20, 99) : 0}
                onClick={() => {
                    if (this.Carousel.state.currentSlide !== generalIndex) {
                        //Used to avoid inmediate changing to following skill after clicking on this
                        const offsetClick = responsive[this.Carousel.state.deviceType].offsetClick;
                        this.setState({autoPlay: false, currentIndex: generalIndex+offsetClick}, ()=>setTimeout(this.setState({autoPlay:true}), 50));
                        this.Carousel.goToSlide(generalIndex, true);
                    }
                }}
            />
            );
        });
        
        //console.log(this.areaCarousel ? this.areaCarousel.state.currentSlide : null);
        console.log(this.state.currentIndex);
        return (
          <SkillTarget
            index={this.state.currentIndex}
            className="root-container">
            <Carousel
                slidesToSlide={1}
                swipeable={true}
                draggable={true}
                afterChange={(prevSlide) => {
                    this.setState({nextRate:1}); 
                }}
                beforeChange={(slide, state) => {
                    //When using infine prop it will start at index 2
                    //so we have to offset the slide by |skillSet| - 2
                    const key = skillSets[(slide + skillSets.length - 2) % skillSets.length].key;
                    const prevKey = skillSets[(state.currentSlide + 3) % skillSets.length].key;
                    let vals = { ...this.state.showPercentageValue };
                    setTimeout(() => {
                        vals[key] = true;
                        this.setState({showPercentageValue: vals});
                    }, 500)
                    vals[prevKey] = false;                 
                    this.setState({nextRate: 0, showPercentageValue: vals}); 
                }}
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
                {skillSets.map(({key, label, icon}) => (
                    <div key={key} className="skill-area-container">
                        <Box>
                            <h2 style={{ userSelect: 'none' }} >{label}</h2>
                            {
                            icon &&
                            <img
                                height={45}
                                src={icon}
                                alt={label}
                                style={{
                                    marginLeft: 20,
                                    userSelect: 'none' 
                                }}
                            />
                            }       
                        </Box>
                        <div style={{
                            marginTop: 20,
                            justifyContent: 'space-evenly'
                        }}>
                            {getSkills(key, this.state.showPercentageValue[key])}
                        </div>
                    </div>
                ))}
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
