import React from "react"
//import styled from "styled-components"
import Button from '@material-ui/core/Button';


import Layout from "../components/layout"

class BlogPage extends React.Component 
{


    render() {
        return (
        <Layout at="blog">
            <Button variant="contained" color="secondary">
                Blogsxx!
            </Button>
        </Layout>
        )
    }
}

export default BlogPage;
