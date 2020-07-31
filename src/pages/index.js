import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import "./styles/styles.scss"

const IndexPage = ({ data }) => {
  const [burger, setBurger] = useState(false)

  useEffect(() => {
    console.log("render")
  })

  const openMenu = () => {
    setBurger(!burger)
    console.log(burger)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <hr className="horiz-line" />
      <div className="keywords">
        <Link to="/keyword-pages/keyword1/">
          {" "}
          {data.keys.nodes[0].frontmatter.keyword1}{" "}
        </Link>
        <Link to="/keyword-pages/keyword2/">
          {" "}
          {data.keys.nodes[0].frontmatter.keyword2}{" "}
        </Link>
        <Link to="/keyword-pages/keyword3/">
          {" "}
          {data.keys.nodes[0].frontmatter.keyword3}{" "}
        </Link>
        <Link to="/keyword-pages/keyword4/">
          {" "}
          {data.keys.nodes[0].frontmatter.keyword4}{" "}
        </Link>
        <Link to="/keyword-pages/keyword5/">
          {" "}
          {data.keys.nodes[0].frontmatter.keyword5}{" "}
        </Link>
        <Link to="/keyword-pages/keyword6/">
          {" "}
          {data.keys.nodes[0].frontmatter.keyword6}{" "}
        </Link>
        <button class="icon" onClick={() => openMenu()}>
          <div className="icon-burger"></div>
        </button>
      </div>
      <div className={burger.toString()}>
        <Link to="/keyword-pages/keyword1/"> {burger.toString()} </Link>
        <Link to="/keyword-pages/keyword2/"> keyword2 </Link>
        <Link to="/keyword-pages/keyword3/"> keyword3 </Link>
        <Link to="/keyword-pages/keyword4/"> keyword4 </Link>
        <Link to="/keyword-pages/keyword5/"> keyword5 </Link>
        <Link to="/keyword-pages/keyword6/"> keyword6 </Link>
      </div>
      <hr className="horiz-line" />
      <div className="large above-fold">
        <div className="featured-large-img"></div>
        <div className="large-padding">
          <div className="titleing">
            <h1 className="article-title">Article Title</h1>
            <h3>keyword • keyword</h3>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            obcaecati tenetur fugiat dicta, vero perferendis fuga amet quod
            magni ut a dolor itaque magnam repudiandae numquam. Vel quasi sit
            eum.
          </p>
          <Link to="/blog-posts/blog-post-one"> Read More</Link>
        </div>
      </div>
      <div className="latest-posts">
        <h3 className="latest-title">latest posts</h3>
        <div className="line-of-3">
          <div className="latest-article">
            <Img
              className="latest-img"
              fluid={data.imgtwo.childImageSharp.fluid}
            />
            <h1>Article Title</h1>
            <h3>keyword • keyword</h3>{" "}
            <Link to="/blog-posts/blog-post-one"> Read More</Link>
          </div>
          <div className="latest-article">
            <Img
              className="latest-img"
              fluid={data.imgtwo.childImageSharp.fluid}
            />
            <h1>Article Title</h1> <h3>keyword • keyword</h3>{" "}
            <Link to="/blog-posts/blog-post-one"> Read More</Link>
          </div>
          <div className="latest-article">
            <Img
              className="latest-img"
              fluid={data.imgtwo.childImageSharp.fluid}
            />
            <h1>Article Title</h1> <h3>keyword • keyword</h3>{" "}
            <Link to="/blog-posts/blog-post-one"> Read More</Link>
          </div>
        </div>
      </div>
      <div className="socials-banner">
        <div>
          <h3>go check us out</h3>
          <div className="social-icons">
            <a href="https://instagram.com/thesurfersblog">
              <div className="superman"></div>
            </a>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="margin-top">
        <h3 className="latest-title">keyword</h3>
        <div className="large">
          {" "}
          <div className="featured-large-img"></div>
          <div className="large-padding">
            <div className="titleing">
              <h1>Article Title</h1>
              <h3>keyword • keyword</h3>
            </div>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              obcaecati tenetur fugiat dicta, vero perferendis fuga amet quod
              magni ut a dolor itaque magnam repudiandae numquam. Vel quasi sit
              eum.
            </p>
            <Link to="/blog-posts/blog-post-one"> Read More</Link>
          </div>
        </div>
        <div className="line-of-3">
          <div className="latest-article">
            <Img
              className="latest-img"
              fluid={data.imgthree.childImageSharp.fluid}
            />
            <h1>Article Title</h1>
          </div>
          <div className="latest-article">
            <Img
              className="latest-img"
              fluid={data.imgthree.childImageSharp.fluid}
            />
            <h1>Article Title</h1>
          </div>
          <div className="latest-article">
            <Img
              className="latest-img"
              fluid={data.imgthree.childImageSharp.fluid}
            />
            <h1>Article Title</h1>
          </div>
        </div>
      </div>
      <div className="margin-top">
        <h3 className="latest-title">the cinema</h3>
        <Link className="enter-cinema" to="/cinema/video-one">
          enter the cinema
        </Link>
        <p className="centered">a place for our sickest videos</p>
        <div className="med">
          {" "}
          <div className="div-med-img"></div>
          <div className="titleing">
            <h1>Article Title</h1>
            <h3>keyword • keyword</h3>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <Link to="/blog-posts/blog-post-one">watch</Link>
        </div>
        <div className="med">
          {" "}
          <div className="div-med-img"></div>
          <div className="titleing">
            <h1>Article Title</h1>
            <h3>keyword • keyword</h3>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <Link to="/blog-posts/blog-post-one">watch</Link>
        </div>
        <div className="med">
          {" "}
          <div className="div-med-img"></div>
          <div className="titleing">
            <h1>Article Title</h1>
            <h3>keyword • keyword</h3>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <Link to="/blog-posts/blog-post-one">watch</Link>
        </div>
      </div>
      <div></div>
      <div class="img"></div>
      <div></div>
      <h3 className="centered">popular posts</h3>
      <div className="line-of-3">
        <div className="sm">
          {" "}
          <div className="div-sm-img"></div>
          <h1>{data.keys.nodes[0].frontmatter.poppost1}</h1>
          <h3>keyword • keyword</h3>
          <Link to="/blog-posts/blog-post-one">read more</Link>
        </div>
        <div className="sm">
          {" "}
          <div className="div-sm-img"></div>
          <h1>{data.keys.nodes[0].frontmatter.poppost2}</h1>
          <h3>keyword • keyword</h3>
          <Link to="/blog-posts/blog-post-one">read more</Link>
        </div>
        <div className="sm">
          {" "}
          <div className="div-sm-img"></div>
          <h1>{data.keys.nodes[0].frontmatter.poppost3}</h1>
          <h3>keyword • keyword</h3>
          <Link to="/blog-posts/blog-post-one">read more</Link>
        </div>
      </div>
      <div>
        <h3 className="centered margin-top">editors choice</h3>
        <div className="large">
          <div className="featured-large-img"></div>
          <div className="large-padding">
            <div className="titleing">
              <h1>{data.keys.nodes[0].frontmatter.editorschoice1}</h1>
              <h3>keyword • keyword</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              aspernatur quas. Ab nam soluta cumque! Esse modi fugit repellendus
              autem quisquam dolores. Officia, ab dolores. Iure nesciunt in illo
              molestias.
            </p>
            <Link to="/blog-posts/blog-post-one">watch</Link>
          </div>
        </div>
        <div>
          <div className="large">
            <div className="featured-large-img"></div>
            <div className="large-padding">
              <div className="titleing">
                <h1>{data.keys.nodes[0].frontmatter.editorschoice2}</h1>
                <h3>keyword • keyword</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                aspernatur quas. Ab nam soluta cumque! Esse modi fugit
                repellendus autem quisquam dolores. Officia, ab dolores. Iure
                nesciunt in illo molestias.
              </p>
              <Link to="/blog-posts/blog-post-one">watch</Link>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-links left">
          <Link to="https://reddit.com">reddit</Link>
          <Link>youtube</Link>
          <Link>pintrest</Link>
          <Link>insta</Link>
        </div>
        <div className="footer-links right">
          <Link>contact</Link>
          <Link>feedback</Link>
        </div>
      </footer>
    </Layout>
  )
}

export default IndexPage

export const data = graphql`
  query ImagesAndMarkdown {
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
    keys: allMarkdownRemark(
      filter: { frontmatter: { post: { eq: "false" } } }
    ) {
      nodes {
        frontmatter {
          keyword1
          keyword2
          keyword3
          keyword4
          keyword5
          keyword6
          editorschoice1
          editorschoice2
          poppost1
          poppost2
          poppost3
        }
      }
    }
  }
`
