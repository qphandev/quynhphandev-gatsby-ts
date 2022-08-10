import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"

import "../styles/about.scss"

const About = () => {
    return (
        <Layout>
            <div className="about-container">
                About
                <div className="image-container">
                    <StaticImage src="../images/moiMatcha.png" alt="picture of author and dog" />
                </div>
            </div>
        </Layout>
    )
}

export default About