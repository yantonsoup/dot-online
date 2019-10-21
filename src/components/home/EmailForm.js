import React from "react"
import { css } from "@emotion/core"

import Form from "./Form"

import * as COLORS from "../../constants/colors"

const pageContainer = css`
  height: 100vh;
  width: 100vw;
  background: ${COLORS.CONTACT_FORM_BACKGROUND};

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default function EmailForm() {
  return (
    <div css={pageContainer}>
      <div
        css={css`
          display: flex;
          margin: 16px;
          @media (min-width: 768px) {
            /* border: 4px solid black; */
            margin: 100px;
          }
        `}
      >
        <div
          css={css`
            flex: 2;
            display: none;
            @media (min-width: 768px) {
              /* border: 4px solid black; */
              display: flex;
            }
          `}
        >
          <div
            css={css`
              font-size: 16px;
              @media (min-width: 768px) {
                /* border: 4px solid black; */
                display: flex;
              }
            `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <Form />
      </div>
    </div>
  )
}
