import { Box, Typography } from "@material-ui/core";
import React from "react"

import styled from "styled-components";
import Palette from "../styles/palette";

const Container = styled.div`
`

class ServicesPage extends React.Component 
{
    render() {
        return (
        <Container>
            {/*Education Background */}
            <Box>
                <Typography 
                    variant='h5'
                    style={{
                        color:Palette.primaryColor
                    }}
                >
                    Education
                </Typography>
            </Box>
        </Container>
        )
    }
}

export default ServicesPage;