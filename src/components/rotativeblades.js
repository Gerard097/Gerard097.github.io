import { Box } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'


const RotatingSvg = styled.svg`
    overflow: visible;
    animation: ${props => `rotate ${1/props.speed * 5.0}s linear infinite`};
    @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(180deg); }
    }
`

/*

const { forward } = props

    const radius = 50

    const offset = Math.PI * 2 * 40 * 0

    const stroke = 4

    const draw = {
        hidden: ({ angle }) => ({
            //pathLength: 1,
            rotate: angle,
        }),
        visible: ({ angle, speed }) => {
            //const delay = 1 + i * 0.5
            return {
                //pathLength: 0.5,
                rotate: angle + (forward ? 180 : -180),
                transition: {
                    rotate: {
                        duration: (1 / speed) * 5,
                        repeat: Infinity,
                        //type: "spring",
                        ease: "linear",
                    },
                },
            }
        },
    }

    const bladeSize = Math.PI * radius * 0.5

    
    //Size = 104
    const Circle = ({ color = "pink", custom, speed, ...props }) => (
        <motion.svg
            {...props}
            initial="hidden"
            animate="visible"
            viewBox={`-${stroke / 2} -${stroke / 2} ${radius * 2 + stroke} ${
                radius * 2 + stroke
            }`}
            style={{
                backgroundColor: "transparent",
                borderColor: "white",
                borderStyle: "solid",
                borderWidth: 1,
            }}
        >
            <SvgCircle color={color} angle={90} speed={speed} {...props} />
            <SvgCircle blur color={color} angle={90} speed={speed} {...props} />
        </motion.svg>
    )

    return (
        <div
            style={{
                height: "100%",
                width: "100%",
            }}
        >
            <Circle {...props} custom={2.5} />
        </div>
    )
}

*/

const radius = 50
const bladeSize = Math.PI * radius * 0.5
const stroke = 4

const SvgCircle = ({
    blur = false,
    angle,
    color,
    speed,
    ...props
}) => (
    <circle
        {...props}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeDasharray={`${bladeSize} ${bladeSize}`}
        strokeDashoffset={0}
        cx={radius}
        cy={radius}
        r={radius}
        filter={blur ? `blur(${2}px)` : ""}
    />
)

const Circle = ({ 
    color = "pink", 
    speed, 
    angle = 0, 
    containerStyle,
    ...props 
}) => (
    <RotatingSvg
        {...props}
        speed={speed}
        initial="hidden"
        animate="visible"
        viewBox={`-${stroke / 2} -${stroke / 2} ${radius * 2 + stroke} ${radius * 2 + stroke}`}
        style={{
            backgroundColor: "transparent",
            ...containerStyle,
        }}
    >
        <SvgCircle color={color} angle={angle} speed={speed} {...props} />
        <SvgCircle blur color={color} angle={angle} speed={speed} {...props} />
    </RotatingSvg>
)

class RotativeBlades extends React.Component
{
    render() {
        return (
            <Box className={this.props.containerClassName}>
                <Circle {...this.props}/>
            </Box>
        );
    }
};

RotativeBlades.defaultProps = {
    forward: true,
    speed: 2.0,
    color: "#FFFFFF"
}

export default RotativeBlades;