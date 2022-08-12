import React from "react"
import {skills} from '../data/skills-info'
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import { CircularProgress, Typography, Box, makeStyles } from "@material-ui/core";
import Palette from '../styles/palette'
import "react-multi-carousel/lib/styles.css";

import './skills.css'
import RotativeBlades from "../components/rotativeblades";

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

const useStyles = makeStyles(() => ({
    circle: {
        stroke: "url(#linearColors)",
    },
}));

const CircularProgressWithLabel = ({label, value, onClick}) => {

    const classes = useStyles({});

    return (
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
            {/*Trick Used to create a glow effect and Gradient Color*/}
            <svg width={50} height={50} style={{position: 'absolute'}}>
                <defs>
                <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
                {/* <stop offset="20%" stopColor="#39F" />
                <stop offset="90%" stopColor="#F3F" /> */}
                <stop offset="20%" stopColor="#39F" />
                <stop offset="90%" stopColor={Palette.primaryColor} />
                </linearGradient>
                </defs>
            </svg>
            <CircularProgress
                size={50}
                classes={{ circle: classes.circle}}
                style={{color: Palette.secondary}}
                className="glow-circular-progress"
                value={value} 
                variant="determinate"/>
            <CircularProgress
                size={50}
                classes={{ circle: classes.circle}}
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
    );
}
const skillSets = [
    { label: "Frontend", key: "frontend" },
    { label: "Backend", key: "backend" },
    { label: "Game Dev", key: "gamedev" },
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

        const getSkills = (area, showPercentageValue) => this.skillAreas[area].map((skill, index) => {
            
            return (
            <CircularProgressWithLabel 
                key={skill} 
                label={skill} 
                value={showPercentageValue ? Math.min(skills[skill].rate * 20, 99) : 0}
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
                        <Box style={{
                            width: "35%",
                            maxWidth: "260px",
                            minWidth: "190px",
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: "2rem"
                        }}>
                            <RotativeBlades 
                                //speed={2}
                                speed = {0.1}
                                containerClassName="rotative-blades-container-out"
                            />
                            <RotativeBlades 
                                //speed={6}
                                speed = {0.2}
                                containerClassName="rotative-blades-container-in"
                            />
                            <h2 className="skill-area-title">{label}</h2>
                        </Box>
                        <div className="skills-container-in" style={{
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
           
          </SkillTarget>
        )
    }
}

export default SkillsPage;
