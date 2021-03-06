import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import * as COLORS from "../../colors"

const container = css`
  color: ${COLORS.WHITE};
  position: fixed;
  display: flex;
  left: 0;
  top: 0;

  width: 100%;
  font-size: 18px;
  padding: 20px;

  @media (min-width: 758px) {
    width: 30%;
    font-size: 20px;
    padding: 40px;
  }

  a {
    color: ${COLORS.YELLOW};
    cursor: pointer;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:visited {
    color: ${COLORS.YELLOW};
  }
`

// const PRISMIC_INTRO_QUERY = graphql`
//   query Intro {
//     prismicIntro {
//       data {
//         text {
//           html
//         }
//       }
//     }
//   }
// `

const Intro = ({ isTransparent }) => {
  // const { prismicIntro } = useStaticQuery(PRISMIC_INTRO_QUERY)
  // const html = prismicIntro.data.text.html

  return (
    <div css={container}>
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      {!isTransparent && `Hello! I'm Yaniv`}
    </div>
  )
}

export default Intro
