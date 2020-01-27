import React from "react"
import styled from "styled-components"
import Button from '@material-ui/core/Button';


import Layout from "../components/layout"

class ServicesPage extends React.Component 
{


    render() {
        return (
        <Layout at="services">
            <Button variant="contained" color="secondary">
                Services :D
            </Button>
        </Layout>
        )
    }
}

export default ServicesPage;
