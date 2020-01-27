import React from "react"
import styled from "styled-components"
import Button from '@material-ui/core/Button';


import Layout from "../components/layout"

class IndexPage extends React.Component 
{


    render() {
        return (
        <Layout>
            <Button variant="contained" color="secondary">
                Index :D
            </Button>
        </Layout>
        )
    }
}

export default IndexPage;
