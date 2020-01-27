import React from "react"
import styled from "styled-components"
import Button from '@material-ui/core/Button';


import Layout from "../components/layout"

class SkillsPage extends React.Component 
{


    render() {
        return (
        <Layout at="skills">
            <Button variant="contained" color="secondary">
                Skills
            </Button>
        </Layout>
        )
    }
}

export default SkillsPage;
