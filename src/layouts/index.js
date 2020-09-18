import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'
import { Link, navigate } from "gatsby";
import Typography from "@material-ui/core/Typography/Typography";
import ResposiveMenu from '../components/responsivemenu'
import Palette from '../styles/palette'
import Transition from '../components/transition'
//import PageTransition from 'gatsby-plugin-page-transitions'
import './index.css'
import 'typeface-roboto';

const Header = styled.header`
    margin: 1rem 1rem 1rem 1rem;
`

const Footer = styled.footer`
    color: ${Palette.primaryColor};
    font-size: 1rem;
    margin: 1rem 1rem 0.5rem 1rem;
    font-family: consolas;
    user-select: none;
    display: flex;
    justify-content: flex-around;
    flex-wrap: wrap;
`

const Attribution = styled.div`
    flex: 1.5;
    text-align: right;
    padding-left: 1rem;
    & > a {
      color: ${Palette.primaryColor}
    }
`
const Badge = styled.a`
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    margin-left: 1.5rem;

    & > img {
      width: 100%;
      height: 100%;
    }
`

const Main = styled.main`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`

const Body = styled.div`
    height: 100%;
    
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
    min-height: 100% !important;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${Palette.background};
    overflow-x: hidden;
  }

  .Typist .Cursor {
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
    user-select: none;
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
        //const {headerStyle, mainStyle, footerStyle} = this.props;

        const {location} = this.props;

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
                        current={location.pathname === "/skills" ? 1 : 0}
                        to="/skills"
                      >
                        Skills
                      </NavLink>
                      <NavLink
                        current={location.pathname === "/services" ? 1 : 0}
                        to="/services"
                      >
                        Services
                      </NavLink>
                      <NavLink 
                        current={location.pathname === "/blog" ? 1 : 0} to="/blog">
                        Blog
                      </NavLink>
                      <NavLink
                        current={location.pathname === "/contact" ? 1 : 0}
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </NavBar>
                  </NavBarContainer>
                }
              ></ResposiveMenu>
            </Header>
            <Transition location={location}>
                <Main>
                    {this.props.children}
                </Main>
            </Transition>
            <Footer>
                <div className='footer-container' style={{display: "flex", alignItems: "center", flex: "1", justifyContent:"space-between"}}>
                  <div style={{whiteSpace:"nowrap"}}>© Gerardo Hernández {(new Date().getFullYear())}</div>
                  <div style={{display:"flex"}}>
                    <Badge href="https://www.linkedin.com/in/gerardo-perez-hernandez" target="_blank">
                      <img src="https://image.flaticon.com/icons/svg/1409/1409945.svg" alt=""/>
                    </Badge>
                    <Badge href="https://stackoverflow.com/users/7908019/gerard097?tab=profile" target="_blank">
                      <img src="https://image.flaticon.com/icons/svg/2111/2111628.svg" alt=""/>
                    </Badge>
                    <Badge href="https://github.com/Gerard097" target="_blank">
                      <img src="https://image.flaticon.com/icons/svg/1051/1051275.svg" alt=""/>
                    </Badge>
                    <Badge href="https://www.hackerrank.com/Gerard0" target="_blank">
                      <img src="https://user-images.githubusercontent.com/17762967/42728663-26ebdb04-87dd-11e8-928f-fb01479a2ce1.png" alt=""/>
                    </Badge>
                  </div>
                </div>
                {location.pathname === "/skills" ?
                <Attribution className='attribution-container'>
                  Icons designed by {" ["}
                  <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a>{","}
                  <a href="https://www.flaticon.es/autores/pixel-perfect" title="Pixel perfect">Pixel perfect</a>
                  {"] "} from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a>
                </Attribution> : null}
            </Footer>
          </Body>
        )
    }
}


export default Layout;