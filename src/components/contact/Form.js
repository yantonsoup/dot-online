import React from "react"
import useForm from "react-hook-form"
import { css } from "@emotion/core"

import Icon from "../Icon"

import * as COLORS from "../../colors"

const formContainer = css`
  background: ${COLORS.PURPLE_DARK};
  width: 100%;

  flex: 1;
  border-radius: 4px;
  box-shadow: 24px 24px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 18px;

  @media (min-width: 768px) {
    min-width: 300px;
    border-radius: 6px;
  }
`

const form = css`
  background: ${COLORS.PURPLE_DARK};
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const inputText = css`
  margin: 0 0 24px 0;
  width: 100%;
  padding: 8px 12px;
  background: ${COLORS.GREY_DARK};
  color: ${COLORS.YELLOW};
  border: 2px solid ${COLORS.PURPLE};
  border-radius: 4px;
`

const submitButton = css`
  color: ${COLORS.GREY_DARK};
  background: ${COLORS.YELLOW};
  border: 2px solid ${COLORS.PURPLE};
  display: flex;
  border-radius: 4px;
  height: 50px;
  width: 150px;
  margin-left: auto;
  cursor: pointer;
`

export default function Form() {
  const { register, handleSubmit } = useForm()

  return (
    <div onSubmit={handleSubmit()} css={formContainer}>
      <form
        css={form}
        action={`https://formspree.io/${process.env.FORMSPREE_FORM_ID}`}
        method="POST"
      >
        <input
          type="text"
          placeholder="name"
          aria-label="name"
          name="name"
          css={inputText}
          ref={register({ required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="email"
          aria-label="email"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          css={inputText}
        />
        <textarea
          aria-label="email body"
          css={css`
            ${inputText}
            height: 100px;
          `}
          placeholder="body"
          name="email body"
          ref={register({ required: true })}
        />
        <button type="submit" css={submitButton} value="Send Email">
          <div
            css={css`
              display: flex;
              margin: 0 auto;
            `}
          >
            Send Mail
            <div>
              <Icon
                fill="black"
                css={css`
                  display: block;
                  margin-left: 8px;
                `}
                width="24px"
                height="24px"
                viewBox="0 0 58 58"
                name="airplane"
              />
            </div>
          </div>
        </button>
      </form>
    </div>
  )
}
