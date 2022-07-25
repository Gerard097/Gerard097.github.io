import React from "react"
//import styled from "styled-components"
//import Button from '@material-ui/core/Button';
import styled from "styled-components";

import { CommingSoon } from "../components/common"

const Container = styled.div`
`

class BlogPage extends React.Component {


    render() {
        return (
        <Container>
            <CommingSoon>COMMING SOON!</CommingSoon>
        </Container>
        )
    }
}

export default BlogPage;
