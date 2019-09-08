import React from "react"
// import { Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/Layout"
// import SEO from "../components/Seo"

const linkStyle = css`
  text-transform: lowercase;
  text-decoration-line: underline;
  width: 100%;
  /* padding-bottom: 1px; */
  /* border-bottom: 1px solid #0000ee; */
`

const headerStyle = css`
  font-weight: bold;
`

const titleStyle = css``

const projectsSection = css``

const MinimalPage = () => (
  <Layout>
    {/* <SEO title="Page two" /> */}
    <div
      css={css`
        @import url("https://fonts.googleapis.com/css?family=Manjari&display=swap");
        font-family: "Manjari", sans-serif;
        margin: 0 auto;
        max-width: 500px;
        margin-top: 200px;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-basis: 100%;
        `}
      >
        <div css={css``}>
          <div css={headerStyle}>Hello</div>
          <div>
            My name is Yan, and this site is a place where you can climb through
            some of the branches of my life. I'm passionate about art and
            technology, and spend lots of time thinking about how we can blend
            the two with a focus on human connection.
          </div>
        </div>
      </div>
      <div
        css={css`
          margin-top: 30px;
          display: flex;
          flex-basis: 100%;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <div css={headerStyle}>Projects</div>
          <a css={linkStyle} href="google.com">
            after the ussr
          </a>
          <a css={linkStyle} href="google.com">
            scott perry site
          </a>
          <a css={linkStyle} href="google.com">
            I am developer portfolio
          </a>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            text-align: right;
          `}
        >
          <div css={headerStyle}>Socials</div>
          <a css={linkStyle} href="google.com">
            Medium
          </a>
          <a css={linkStyle} href="google.com">
            Twitter
          </a>
          <a css={linkStyle} href="google.com">
            Github
          </a>
        </div>
      </div>
    </div>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default MinimalPage
