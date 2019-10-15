import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import Icon from "./Icon"

const socialIconStyle = css`
  width: 40px;
  height: 40px;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`

const Socials = ({ siteSocials }) => (
  <div
    css={css`
      display: flex;
      justify-content: space-around;
      max-height: 100px;
    `}
  >
    {siteSocials.map(({ name, linkTo }) => (
      <div
        key={linkTo}
        css={css`
          padding: 1.6rem 0;
        `}
      >
        <a
          href={linkTo}
          rel="noopener noreferrer"
          target="_blank"
          css={socialIconStyle}
        >
          <Icon name={name} />
        </a>
      </div>
    ))}
  </div>
)

Socials.propTypes = {
  siteSocials: PropTypes.array,
}

Socials.defaultProps = {
  siteSocials: ``,
}

export default Socials
