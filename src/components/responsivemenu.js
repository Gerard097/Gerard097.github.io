import React from 'react'
import HamburgerMenu from "react-hamburger-menu";
import Palette from '../styles/palette'
import styled from "styled-components"
import Collapse from "@material-ui/core/Collapse"

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
              <Collapse
                in={this.state.showMenu}>
                {this.state.shouldRender === true ? this.props.menu : null}
              </Collapse>                
            </CollapsedBar>
          </div>
        )
    }
}

export default ResponsiveMenu;