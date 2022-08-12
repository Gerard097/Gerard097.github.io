import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

const RotatingSvg = styled.svg`
  overflow: visible;
`;

const RotatingCircle = styled.circle`
  transform-box: fill-box;
  transform-origin: center;
  animation: ${(props) => `rotate ${(1 / props.speed) * 5.0}s linear infinite`};
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`;

const AnimatedLine = styled.path`
  stroke-dashoffset: 0;
  animation: test ${(props) => props.duration}s linear 1;
  animation-fill-mode: forwards;
  @keyframes test {
    to {
      stroke-dashoffset: ${(props) => -(props.length + 5)};
    }
  }
`;
const stroke = 4;

const constRadius = 50;

const viewPort = { x: 400, y: 400 };

const halfViewPort = { x: viewPort.x / 2, y: viewPort.y / 2 };

const SvgCircle = ({
  blur = false,
  sizeFactor = 1.0,
  angle,
  color,
  speed,
  ...props
}) => {
  const radius = constRadius * sizeFactor;
  const bladeSize = Math.PI * radius * 0.5;

  return (
    <RotatingCircle
      {...props}
      speed={speed}
      fill="none"
      stroke={color}
      strokeWidth={stroke}
      strokeDasharray={`${bladeSize} ${bladeSize}`}
      strokeDashoffset={0}
      cx={viewPort.x / 2}
      cy={viewPort.y / 2}
      r={radius}
      filter={blur ? `blur(${2}px)` : ""}
    />
  );
};

const Circle = ({
  color = "pink",
  speed,
  angle = 0,
  containerStyle,
  skills,
  ...props
}) => {
  //Build everything related to the paths
  const [paths, setPaths] = useState(undefined);

  useEffect(() => {
    console.log("Building Skill Set", skills);
  }, [skills]);

  return (
    <RotatingSvg
      {...props}
      speed={speed}
      viewBox={`-${stroke / 2} -${stroke / 2} ${viewPort.x} ${viewPort.y}`}
      style={{
        backgroundColor: "transparent",
        ...containerStyle
      }}
    >
      <SvgCircle color={color} angle={angle} speed={speed} {...props} />
      <SvgCircle blur color={color} angle={angle} speed={speed} {...props} />
      <SvgCircle
        sizeFactor={0.8}
        color={color}
        angle={angle}
        speed={speed * 1.4}
        {...props}
      />
      <SvgCircle
        blur
        sizeFactor={0.8}
        color={color}
        angle={angle}
        speed={speed * 1.4}
        {...props}
      />
      {Array(12)
        .fill(0)
        .map((_, i) => {
          let angle = i * ((2 * Math.PI) / 12);
          let dx = Math.cos(angle);
          let dy = Math.sin(angle);
          let x = halfViewPort.x + dx * (constRadius + 8);
          let y = halfViewPort.y + dy * (constRadius + 8);
          let x2 = x + dx * constRadius * 1.55;
          let y2 = y + dy * constRadius * 1.5;

          let len = Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));

          let piecesCount = Math.floor(len / 5);

          let vals = Array(piecesCount).fill(5);
          vals.push(5);

          return (
            <Fragment>
              <path
                stroke={"#FFFFFF3f"}
                strokeWidth={stroke / 2}
                strokeDasharray={[]}
                d={`M ${x + "," + y} L ${x2 + "," + y2}`}
              />
              <AnimatedLine
                duration={Math.random() * 1.5 + 0.5}
                length={len}
                stroke={"white"}
                strokeWidth={stroke / 2}
                strokeDasharray={[0, len, vals]}
                d={`M ${x + "," + y} L ${x2 + "," + y2}`}
              />
            </Fragment>
          );
        })}
    </RotatingSvg>
  );
};

class RotativeBlades extends React.Component {
  constructor(props) {
    super(props);

    this.paths = {};
  }

  render() {
    return (
      <div className={this.props.containerClassName}>
        <Circle {...this.props} />
      </div>
    );
  }
}

RotativeBlades.defaultProps = {
  forward: true,
  speed: 2.0,
  color: "#FFFFFF"
};

export default RotativeBlades;
