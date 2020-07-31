import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import "../styles/styles.scss"

const Keyword1 = () => {
  const data = useStaticQuery(graphql`
    query imageAndImage {
      imgthree: file(relativePath: { eq: "Surf-3.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imgtwo: file(relativePath: { eq: "Surf-21.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <hr className="horiz-line" />
      <div className="keywords">
        <Link to="/keyword-pages/keyword1/"> keyword1 </Link>{" "}
        <Link to="/keyword-pages/keyword2/"> keyword2 </Link>{" "}
        <Link to="/keyword-pages/keyword3/"> keyword3 </Link>{" "}
        <Link to="/keyword-pages/keyword4/"> keyword4 </Link>{" "}
        <Link to="/keyword-pages/keyword5/"> keyword5 </Link>{" "}
        <Link to="/keyword-pages/keyword6/"> keyword6 </Link>{" "}
      </div>{" "}
      <hr className="horiz-line" />
      <h3 className="centered">keyword1</h3>
      <div className="large above-fold">
        <Img
          className="large-img"
          fluid={data.imgthree.childImageSharp.fluid}
        />{" "}
        <div className="large-padding">
          <div className="titleing">
            <h1 className="article-title"> Article Title </h1>{" "}
            <h3> keyword• keyword </h3>{" "}
          </div>{" "}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Optio
            obcaecati tenetur fugiat dicta, vero perferendis fuga amet quod
            magni ut a dolor itaque magnam repudiandae numquam.Vel quasi sit
            eum.{" "}
          </p>{" "}
          <Link to="/blog-posts/blog-post-one"> Read More </Link>{" "}
        </div>{" "}
      </div>{" "}
      <div className="latest-posts">
        <h3 className="latest-title"> latest posts </h3>{" "}
        <div className="line-of-3">
          <div className="latest-article">
            <Img
              className="latest-img"
              fluid={data.imgtwo.childImageSharp.fluid}
            />{" "}
            <h1> Article Title </h1> <h3> keyword• keyword </h3>{" "}
            <Link to="/blog-posts/blog-post-one"> Read More </Link>{" "}
          </div>{" "}
          <div className="latest-article">
            <Img
              className="latest-img"
              fluid={data.imgtwo.childImageSharp.fluid}
            />{" "}
            <h1> Article Title </h1> <h3>keyword • keyword</h3>{" "}
            <Link to="/blog-posts/blog-post-one"> Read More </Link>{" "}
          </div>{" "}
          <div className="latest-article">
            <Img
              className="latest-img"
              fluid={data.imgtwo.childImageSharp.fluid}
            />{" "}
            <h1> Article Title </h1> <h3>keyword • keyword</h3>{" "}
            <Link to="/blog-posts/blog-post-one"> Read More </Link>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="socials-banner">
        <div className="vl">
          <h3> newsletter </h3>{" "}
          <p> enter your email to subscribe to our monthly newsletter </p>{" "}
          <form action="">
            <input type="text" />
          </form>{" "}
        </div>{" "}
        <div>
          <h3> go check us out </h3>{" "}
          <div>
            <div> </div> <div> </div> <div> </div> <div> </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="margin-top">
        <h3 className="latest-title"> keyword </h3>{" "}
        <div className="large">
          <Img
            className="large-img"
            fluid={data.imgtwo.childImageSharp.fluid}
          />{" "}
          <div className="large-padding">
            <div className="titleing">
              <h1> Article Title </h1> <h3> keyword• keyword </h3>{" "}
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.Optio
              obcaecati tenetur fugiat dicta, vero perferendis fuga amet quod
              magni ut a dolor itaque magnam repudiandae numquam.Vel quasi sit
              eum.{" "}
            </p>{" "}
            <Link to="/blog-posts/blog-post-one"> Read More </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="line-of-3">
          <div className="latest-article">
            <Img
              className="latest-img"
              fluid={data.imgthree.childImageSharp.fluid}
            />{" "}
            <h1> Article Title </h1>{" "}
          </div>{" "}
          <div className="latest-article">
            <Img
              className="latest-img"
              fluid={data.imgthree.childImageSharp.fluid}
            />{" "}
            <h1> Article Title </h1>{" "}
          </div>{" "}
          <div className="latest-article">
            <Img
              className="latest-img"
              fluid={data.imgthree.childImageSharp.fluid}
            />{" "}
            <h1> Article Title </h1>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="margin-top">
        <h3 className="latest-title"> the cinema </h3>{" "}
        <Link className="enter-cinema" to="/cinema/video-one">
          enter the cinema{" "}
        </Link>{" "}
        <p className="centered"> a place for our sickest videos </p>{" "}
        <div className="med">
          {" "}
          <Img
            className="med-img"
            fluid={data.imgtwo.childImageSharp.fluid}
          />{" "}
          <div className="titleing">
            <h1> Article Title </h1> <h3> keyword• keyword </h3>{" "}
          </div>{" "}
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>{" "}
          <Link to="/blog-posts/blog-post-one"> watch </Link>{" "}
        </div>{" "}
        <div className="med">
          {" "}
          <Img
            className="med-img"
            fluid={data.imgtwo.childImageSharp.fluid}
          />{" "}
          <div className="titleing">
            <h1> Article Title </h1> <h3> keyword• keyword </h3>{" "}
          </div>{" "}
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>{" "}
          <Link to="/blog-posts/blog-post-one"> watch </Link>{" "}
        </div>{" "}
        <div className="med">
          {" "}
          <Img
            className="med-img"
            fluid={data.imgtwo.childImageSharp.fluid}
          />{" "}
          <div className="titleing">
            <h1> Article Title </h1> <h3> keyword• keyword </h3>{" "}
          </div>{" "}
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>{" "}
          <Link to="/blog-posts/blog-post-one"> watch </Link>{" "}
        </div>{" "}
      </div>{" "}
      <div> </div> <div class="img"> </div> <div> </div>{" "}
      <h3 className="centered"> popular posts </h3>{" "}
      <div className="line-of-3">
        <div className="sm">
          {" "}
          <Img
            className="latest-img"
            fluid={data.imgthree.childImageSharp.fluid}
          />{" "}
          <h1> Article Title </h1> <h3> keyword• keyword </h3>{" "}
          <Link to="/blog-posts/blog-post-one"> read more </Link>{" "}
        </div>{" "}
        <div className="sm">
          {" "}
          <Img
            className="latest-img"
            fluid={data.imgthree.childImageSharp.fluid}
          />{" "}
          <h1> Article Title </h1> <h3> keyword• keyword </h3>{" "}
          <Link to="/blog-posts/blog-post-one"> read more </Link>{" "}
        </div>{" "}
        <div className="sm">
          {" "}
          <Img
            className="latest-img"
            fluid={data.imgthree.childImageSharp.fluid}
          />{" "}
          <h1> Article Title </h1> <h3> keyword• keyword </h3>{" "}
          <Link to="/blog-posts/blog-post-one"> read more </Link>{" "}
        </div>{" "}
      </div>{" "}
      <div>
        <h3 className="centered margin-top"> editors choice </h3>{" "}
        <div className="large">
          <Img
            className="large-img"
            fluid={data.imgtwo.childImageSharp.fluid}
          />{" "}
          <div className="large-padding">
            <div className="titleing">
              <h1> Article Title </h1> <h3> keyword• keyword </h3>{" "}
            </div>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo,
              aspernatur quas.Ab nam soluta cumque!Esse modi fugit repellendus
              autem quisquam dolores.Officia, ab dolores.Iure nesciunt in illo
              molestias.{" "}
            </p>{" "}
            <Link to="/blog-posts/blog-post-one"> watch </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div>
          <div className="large">
            <Img
              className="large-img"
              fluid={data.imgtwo.childImageSharp.fluid}
            />{" "}
            <div className="large-padding">
              <div className="titleing">
                <h1> Article Title </h1> <h3> keyword• keyword </h3>{" "}
              </div>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo,
                aspernatur quas.Ab nam soluta cumque!Esse modi fugit repellendus
                autem quisquam dolores.Officia, ab dolores.Iure nesciunt in illo
                molestias.{" "}
              </p>{" "}
              <Link to="/blog-posts/blog-post-one"> watch </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <footer>
        <div className="footer-links left">
          <Link to="https://reddit.com"> reddit </Link> <Link> youtube </Link>{" "}
          <Link> pintrest </Link> <Link> insta </Link>{" "}
        </div>{" "}
        <div className="footer-links right">
          <Link> contact </Link> <Link> feedback </Link>{" "}
        </div>{" "}
      </footer>{" "}
    </Layout>
  )
}

export default Keyword1
