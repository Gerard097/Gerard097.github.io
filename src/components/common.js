import React from 'react'
import styled, {keyframes} from "styled-components";

//import Palette from '../styles/palette'

import './common.css'

//const loadColor = "red";
const neonColor = "red";

// const loadAnimation = keyframes`

// 0% { 
//     border-top: 2px solid ${loadColor};
//     border-bottom: 2px solid black;
//     border-right: 2px solid black;
//     border-left: 2px solid black;
// }
// 25% {
//     border-top: 2px solid black;
//     border-bottom: 2px solid black;
//     border-right: 2px solid ${loadColor};
//     border-left: 2px solid black;
// }        
// 50% {
//     border-top: 2px solid black;
//     border-bottom: 2px solid ${loadColor};
//     border-right: 2px solid black;
//     border-left: 2px solid black;
// }
// 75% { 
//     border-top: 2px solid black;
//     border-bottom: 2px solid black;
//     border-right: 2px solid black;
//     border-left: 2px solid ${loadColor};
// }

// 100% { 
//     border-top: 2px solid ${loadColor};
//     border-bottom: 2px solid black;
//     border-right: 2px solid black;
//     border-left: 2px solid black;
// }

// `

const glowAnimation = keyframes`
    0% { 
        
        box-shadow:
        0 0 0.1vw  0.4vw #fff7f7,   
        0 0 0.4vw  0.6vw #e97272, 
        0 0   4vw  0.4vw #e50b0b,
        inset 0 0 1.5vw  0.4vw #e50b0b,
        inset 0 0 0.4vw  0.2vw #e97272,
        inset 0 0 0.5vw  0.2vw #fff7f7;
        border-radius: 1.5rem;

        text-shadow: 
  .1vw 0vw .25vw #ffd8d8, .2vw 0vw .25vw #ffd8d8, .4vw 0vw .25vw #ffd8d8, 
  .1vw 0vw   0vw #f25757, .2vw 0vw   0vw #f25757, .4vw 0vw   0vw #f25757,
  .1vw 0vw  .1vw #f25757, .2vw 0vw  .1vw #f25757, .4vw 0vw  .1vw #f25757,
  .1vw 0vw   2vw #f25757, .2vw 0vw   2vw #f25757, .4vw 0vw   2vw #f25757, 
  .1vw 0vw   1vw #e50b0b, .2vw 0vw   1vw #e50b0b, .4vw 0vw   5vw #e50b0b, 
  .1vw 0vw   5vw #e50b0b, .2vw 0vw  20vw #e50b0b, .4vw 0vw  10vw #e50b0b,
  .1vw 0vw  10vw #e50b0b, .2vw 0vw  30vw #e50b0b, .4vw 0vw  10vw #e50b0b;
    }
    100% { 
        
        box-shadow:
        0 0 0.2vw  0.4vw #fff7f7,   
        0 0 0.8vw  0.6vw #e97272, 
        0 0   8vw  0.4vw #e50b0b,
        inset 0 0 3vw  0.4vw #e50b0b,
        inset 0 0 0.8vw  0.2vw #e97272,
        inset 0 0 1vw  0.2vw #fff7f7;
        border-radius: 1.5rem;
        
        border-radius: 1.5rem;
        
        text-shadow: 
  .1vw 0vw .5vw #ffd8d8, .2vw 0vw .25vw #ffd8d8, .4vw 0vw .25vw #ffd8d8, 
  .1vw 0vw   0vw #f25757, .2vw 0vw   0vw #f25757, .4vw 0vw   0vw #f25757,
  .1vw 0vw  .2vw #f25757, .2vw 0vw  .1vw #f25757, .4vw 0vw  .1vw #f25757,
  .1vw 0vw   4vw #f25757, .2vw 0vw   2vw #f25757, .4vw 0vw   2vw #f25757, 
  .1vw 0vw   2vw #e50b0b, .2vw 0vw   1vw #e50b0b, .4vw 0vw   5vw #e50b0b, 
  .1vw 0vw   10vw #e50b0b, .2vw 0vw  20vw #e50b0b, .4vw 0vw  10vw #e50b0b,
  .1vw 0vw  20vw #e50b0b, .2vw 0vw  30vw #e50b0b, .4vw 0vw  10vw #e50b0b;
    }
`

export const CommingSoonPriv = styled.div`
    font-size: 14rem;
    padding: 2rem;
    color: ${neonColor};
    animation: ${glowAnimation} 0.85s ease-in-out infinite alternate;
    transform: scale(.45);
    text-align: center;
`
export const CommingSoon = ({children}) => (
    <CommingSoonPriv className="glow-text">{children}</CommingSoonPriv>
);