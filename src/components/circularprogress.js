import { Box } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'


const radius = 200
const bladeSize = Math.PI * radius * 2
const stroke = 20
const blurSize = 14;

const AutoFillCircle = styled.circle`

    animation-name: fill;
    animation-duration: ${props => props.duration}s;
    animation-timing-function: ease;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    transform-box: fill-box;
    transform-origin: center;
    transform: rotate(${props => props.angle}deg);

    @keyframes fill {
        0% {
            stroke-dashoffset: ${Math.PI * radius * 2}
        }

        100% {
            stroke-dashoffset: ${props => Math.PI * radius * 2 * (100-props.value)/100}
        }
    }
`

const SvgCircle = ({
    blur,
    angle,
    color,
    speed,
    value,
    reverse,
    customGroup,
    ...props
}) => (
    <AutoFillCircle
        {...props}
        value={reverse ? -value : value}
        fill="none"
        stroke={ color}
        strokeWidth={stroke}
        strokeDasharray={`${bladeSize} ${bladeSize}`}
        strokeDashoffset={Math.PI * radius * 2}
        angle={angle}
        cx={radius}
        cy={radius}
        r={radius}
        filter={blur ? "blur(" + blurSize +"px)" : ""}
    />
)

const Circle = ({ 
    color,
    duration, 
    angle = 0, 
    containerStyle,
    ...props 
}) => (
    <svg
        {...props}
        viewBox={`-${stroke / 2 + blurSize*2} -${stroke / 2 + blurSize*2} ${radius * 2 + stroke + blurSize*4} ${radius * 2 + stroke + blurSize * 4}`}
        style={{
            backgroundColor: "transparent",
            ...containerStyle,
        }}
    >
        <SvgCircle color={color} angle={angle} duration={duration} {...props} />
        <SvgCircle color={color} angle={angle} duration={duration} {...props} blur/>
    </svg>
)

class CircularProgress extends React.Component
{
    render() {

        const { containerClassName, containerStyle, startAngle, ...otherProps } = this.props;

        return (
            <Box style={containerStyle} className={containerClassName}>
                <Circle angle={startAngle} {...otherProps}/>
            </Box>
        );
    }
};

CircularProgress.defaultProps = {
    //forward: true,
    duration: 2.0,
    color: "#FFFFFF",
    containerClassName: "",
    value: 0,
    startAngle: 0,
    reverse: false,
    customGroup: undefined
}

export default CircularProgress;