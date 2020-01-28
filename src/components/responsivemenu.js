import React from 'react'
import HamburgerMenu from "react-hamburger-menu";
import Palette from '../styles/palette'
import styled, { keyframes } from "styled-components"

const Navbar = styled.div`
    display: block;

    @media(max-width: ${props=>props.size}) {
        display: none;
    }
`

const CollapsedBar = styled.div`

    display: none;

    @media(max-width: ${props=>props.size}) {
        display: flex;
        flex-direction: column;
    }
`

const Collapse = keyframes`
    0% {
        
        transform: scaleY(0);
    }

    100% {
        
        transform: scaleY(1);
    }
`

const AnimatedCollapse = styled.div`
    overflow: hidden;
    transition: max-height ${props => props.animDur}s linear; // note that we're transitioning flex, not height!
    
    max-height: ${props => props.animate ? "200px" : "1px"};
`

class ResponsiveMenu extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            showMenu: true,
            canChangeToggle: true,
            shouldRender: true
        };
    }

    render() {

        const animDuration = 0.4;

        return (
          <div>
            <Navbar 
                size={this.props.changeMenuOn}>
                {this.props.menu}
            </Navbar>
            <CollapsedBar
                size={this.props.changeMenuOn}>
              <HamburgerMenu
                isOpen={this.state.showMenu}
                menuClicked={() => {
                  if (this.state.canChangeToggle) {
                    
                    const deferredRender = this.state.showMenu ? true : false;
                    
                    this.setState({ showMenu: !this.state.showMenu, 
                                    canChangeToggle: false});

                    if (!deferredRender) {
                        this.setState({ shouldRender : !this.state.shouldRender });
                    }

                    setTimeout(() => { 
                        this.setState({ canChangeToggle: true })

                        if (deferredRender) {
                            this.setState({ shouldRender : !this.state.shouldRender });
                        }
                    }, animDuration * 1000)
                  }
                }
                }
                color={Palette.secondary}
                animationDuration={animDuration}
              >
              </HamburgerMenu>
              <AnimatedCollapse 
                animDur={0.2}
                animate={this.state.showMenu}>
                {this.state.shouldRender === true ? this.props.menu : null}
              </AnimatedCollapse>                
            </CollapsedBar>
          </div>
        )
    }
}

export default ResponsiveMenu;