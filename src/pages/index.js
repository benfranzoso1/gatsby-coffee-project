import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/info"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Ben's Coffee Shop"
      styleClass="default-background"
    />
    <Info
      text="Ben's Coffee uses the best beans in all of the Southern Hemishpere"
      ctalink="/about/"
      ctatext="About Page"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-bg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
