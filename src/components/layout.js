import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'
import { Link, navigate } from "gatsby";
import Typography from "@material-ui/core/Typography/Typography";
import ResposiveMenu from '../components/responsivemenu'
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
    color: ${Palette.primaryColor};
    display: block;
`

const HomeLogo = styled(LogoBase)`
    cursor: pointer;
    float: left;
    transition: all 0.3s ease 0s;
    & : hover {
        border-style: ${props => props.isCurrent ? "solid" : "hidden"};
        text-shadow:0px 0px 0.5rem ${Palette.primaryColor};
        transform: rotate(5deg);
    }
`

// const FooterLogo = styled(LogoBase)`

// `

const GlobalStyle = createGlobalStyle`
  body, html, #___gatsby, #___gatsby > div {
    margin: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .Typist .Cursor {
    display: inline-block;
  
    &--blinking {
      opacity: 1;
      animation: blink 1s linear infinite;
      @keyframes blink {
        0% { opacity:1; }
        50% { opacity:0; }
        100% { opacity:1; }
      }
    }
  }
`

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: 550px) {
    flex-direction: column;
    align-items: center;
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
    color: ${Palette.primaryColor};
    display: inline-block;    
    transition: all 0.3s ease 0s;
    border-color: #00000000 #00000000 ${props => props.current ? Palette.primaryColor : "#00000000"} #00000000;
    border-width: 0 0 0.14rem 0;
    border-style: solid;
    & : hover {
        
        text-shadow:0px 0px 0.5rem ${Palette.primaryColor};
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
            current={props.current}
            to={props.to}>
            {props.children}
        </StyledLink>
    </NavBarItem>
)

class Layout extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
        this.hamburgerMenu = React.createRef();
    }

    render() {
        
        return (
          <Body>
            <GlobalStyle />
            <Header>
              <ResposiveMenu
                changeMenuOn="550px"
                menu={
                  <NavBarContainer>
                    <HomeLogo
                      onClick={() => {
                        navigate("/")
                      }}
                      variant="h3"
                    >
                      {"<GPH>"}
                    </HomeLogo>
                    <NavBar>
                      <NavLink
                        current={this.props.at === "skills" ? 1 : 0}
                        to="/skills"
                      >
                        Skills
                      </NavLink>
                      <NavLink
                        current={this.props.at === "services" ? 1 : 0}
                        to="/services"
                      >
                        Services
                      </NavLink>
                      <NavLink 
                        current={this.props.at === "blog" ? 1 : 0} to="/blog">
                        Blog
                      </NavLink>
                      <NavLink
                        current={this.props.at === "contact" ? 1 : 0}
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </NavBar>
                  </NavBarContainer>
                }
              ></ResposiveMenu>
            </Header>
            <Main>{this.props.children}</Main>
            <Footer></Footer>
          </Body>
        )
    }
}

export default Layout;