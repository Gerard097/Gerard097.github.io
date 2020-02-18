import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition
} from "react-transition-group"

import "./transitions.css"

const timeout = 500;

const animation = "slide";

const animationStyles = {
  "flip": {
    entered: {
        transition: `all ${timeout}ms ease-in-out`,
    },
    exiting: {
        transition: `all ${timeout}ms ease-in-out`,
    } 
  },
  "slide": {
    entered: {
        transition: `transform ${timeout}ms ease-in-out, opacity ${timeout + 250}ms ease-in-out`,
    },
    exiting: {
        transition: `transform ${timeout}ms ease-in-out, opacity ${timeout - 250}ms ease-in-out`,
    } 
  },
  "fade": {
    entering: {
        position: `absolute`,
        opacity: 0        
    },
    entered: {
        transition: `all ${timeout}ms ease-in-out`,
        opacity: 1
    },
    exiting: {
        opacity: 0,
        transition: `all ${timeout}ms ease-in-out`,
    } 
  }
}

const routes = ["/", "/skills", "/services", "/blog", "/contact"]

class Transition extends React.PureComponent {

  constructor(props) {
      super(props);

      this.state = {
        direction: ""
      }

      this.lastRoute = props.location.pathname;
  }

  onTransitionStart(location) {
    if (location.pathname !== this.lastRoute) {
        const diff = routes.indexOf(location.pathname) - routes.indexOf(this.lastRoute);
        this.lastRoute = location.pathname;
        this.setState({direction: diff > 0 ? "right" : "left"});
    }
  }

  render() {
    const { children, location } = this.props

    return (
      <div
        className={`transition-outer ${animation}`}
      >
      <TransitionGroup
        
        className={`transition-inner ${animation}`}
      >
        <ReactTransition
        //   onExit={() => this.onTransitionStart(location)}
          onEnter={ ()=> this.onTransitionStart(location)}
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {status => (
            <div
              className={`transition-container ${animation} ${status} ${this.state.direction}`}
              style={{
                ...animationStyles[animation][status],
              }}
            >
              {children}
            </div>
            )}
        </ReactTransition>
        {/* <CSSTransition
            key={location.pathname}
            classNames="slide"
            timeout={timeout}>
            <div>
            {children}
            </div>
        </CSSTransition> */}
      </TransitionGroup>
      </div>
    )
  }
}
export default Transition