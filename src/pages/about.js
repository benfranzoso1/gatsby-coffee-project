import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="About Ben's"
      styleClass="default-background"
    />
    <Info
      text="Ben's Coffee uses the best beans in all of the Southern Hemishpere"
      title="Our Story"
      ctalink="/about/"
      ctatext="About Page"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "bens.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
