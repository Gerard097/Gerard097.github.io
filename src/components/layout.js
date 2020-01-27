import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'
import Flexbox from "flexbox-react";
import { Link, navigate } from "gatsby";
import Typography from "@material-ui/core/Typography/Typography";
import ResposiveMenu from 'react-responsive-navbar'

import Palette from '../styles/palette'

import 'typeface-roboto';

const Header = styled.header`
    margin: 1rem 1rem 1rem 1rem;
`

const Footer = styled.footer`
    margin: 1rem 1rem 1rem 1rem;   
`

const Main = styled.main`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const Body = styled.div`
    height: 100%;
    background-color: ${Palette.background};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const LogoBase = styled(Typography)`
    user-select: none;
    font-family: consolas;
    color:rgb(3, 218, 198);
    display: inline-block;
`

const HomeLogo = styled(LogoBase)`
    cursor: pointer;
    float: left;
    transition: all 0.3s ease 0s;
    & : hover {
        border-style: ${props => props.isCurrent ? "solid" : "hidden"};
        text-shadow:0px 0px 0.5rem ${Palette.secondary};
        transform: rotate(5deg);
    }
`

const FooterLogo = styled(LogoBase)`

`

const GlobalStyle = createGlobalStyle`
  body, html, #___gatsby, #___gatsby > div {
    margin: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .small-menu {
      
  }
`

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: 550px) {
    flex-direction: column;
    
  }
`

const NavBar = styled.ul`
  list-style-type: none;
  padding: 0;
`

const NavBarItem = styled.li`
  display: inline-block;
  padding-right: 1.2rem;
  font-size: 1.5rem;
 
  @media(max-width: 550px) {
    padding-right: 0;
    display: block;
  }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${Palette.secondary};
    display: inline-block;    
    transition: all 0.3s ease 0s;
    border-color: #00000000 #00000000 ${props => props.isCurrent ? Palette.secondary : "#00000000"} #00000000;
    border-width: 0 0 0.14rem 0;
    border-style: solid;
    & : hover {
        
        text-shadow:0px 0px 0.5rem ${Palette.secondary};
        transform: rotate(5deg);
    }
    background-color: #00000000;
    padding-bottom: 0.1rem;

    @media(max-width: 550px) {
    }
`

const NavLink = props => (
    
    <NavBarItem>
        <StyledLink 
            isCurrent={props.isCurrent}
            to={props.to}>
            {props.children}
        </StyledLink>
    </NavBarItem>
)

class Layout extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.at);
        return (
          <Body>
            <GlobalStyle/>
            <Header>
                <ResposiveMenu
                     menuOpenButton={<div>X</div>}
                     menuCloseButton={<div>T</div>}
                     changeMenuOn="550px"
                     smallMenuClassName="small-menu"
                     menu={
                        <NavBarContainer>
                            <HomeLogo 
                                onClick ={()=>{navigate("/")}}
                                variant='h3'>
                                {"<GPH>"}
                            </HomeLogo>
                            <NavBar>
                                <NavLink isCurrent={this.props.at === "skills"} to="/skills">Skills</NavLink>
                                <NavLink isCurrent={this.props.at === "services"} to="/services">Services</NavLink>
                                <NavLink isCurrent={this.props.at === "blog"} to="/blog">Blog</NavLink>
                                <NavLink isCurrent={this.props.at === "contact"} to="/contact">Contact</NavLink>
                            </NavBar>
                        </NavBarContainer>
                      }
                >
                </ResposiveMenu>
            </Header>
            <Main>
                {this.props.children}
            </Main>
            <Footer>
                
            </Footer>
          </Body>
        )
    }
}

export default Layout;