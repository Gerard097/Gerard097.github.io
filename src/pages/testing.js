import { Box } from "@material-ui/core";
import React from "react"

import styled from "styled-components"
import RotativeBlades from "../components/rotative-alt";

const Container = styled(Box)`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
`

const SkillContainer = styled(Box)`
    width: 50%;
`

class TestingPage extends React.Component 
{
    render() {
        return (
        <Container>
            <SkillContainer>
                <RotativeBlades/>
            </SkillContainer>
        </Container>
        )
    }
}

export default TestingPage;