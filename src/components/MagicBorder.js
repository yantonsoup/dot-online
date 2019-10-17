/* eslint-disable */
import React, { Component } from "react"
import { css } from "@emotion/core"
import chroma from "chroma-js"

import * as COLORS from "../constants/colors"

const numSwirls = 18

function getConicGradient(degreeOffset, coneColor) {
  return `
    conic-gradient(
      from ${degreeOffset}deg,
      ${coneColor},
      ${COLORS.TRANSPARENT}
    );
  `
}

const getSwirlDiameter = numSwirls => {
  let swirlDiameter = 2
  if (typeof window !== `undefined`) {
    swirlDiameter = (window.innerWidth / numSwirls) * 2

    console.warn("window.innerWidth", window.innerWidth)
    console.warn("window.devicePixelRatio", window.devicePixelRatio)
  }

  return swirlDiameter
}

const getSwirlColors = numSwirls => {
  const swirlColors = chroma
    .scale(COLORS.SMALLBALLGRADIENT)
    .mode("lch")
    .colors(numSwirls)

  return swirlColors
}

const dynamicSquiggles = (degreeRotate, color, swirlDiameter) => {
  const conicGradientProperties = getConicGradient(degreeRotate, color)

  return css`
    width: ${swirlDiameter}px;
    height: ${swirlDiameter}px;
    margin-left: -${swirlDiameter / 2}px;
    border-radius: ${swirlDiameter / 2}px;
    background: ${conicGradientProperties};
  `
}

const MagicBorder = () => {
  const initialSwirlDiameter = getSwirlDiameter(numSwirls)
  console.warn({ initialSwirlDiameter })
  const [swirlDiameter, setSwirlDiameter] = React.useState(initialSwirlDiameter)

  React.useEffect(() => {
    function handleResize() {
      const swirlDiameter = getSwirlDiameter(numSwirls)
      setSwirlDiameter(swirlDiameter)
    }

    window.addEventListener("resize", handleResize)
  })

  /* 
  
  return <div>Rendered at {dimensions.width} x {dim
  */
  console.warn("magic border rerender")
  const swirlColors = getSwirlColors(numSwirls)

  console.warn({ swirlDiameter })
  console.warn({ swirlColors })

  return (
    <div
      css={css`
        display: flex;
        background: ${COLORS.BACKGROUND};
        margin-bottom: -${swirlDiameter / 2}px;
      `}
    >
      {swirlColors.map((color, index) => {
        const rotationPerFrame = 720 / numSwirls
        const circleRotation = -90 + index * rotationPerFrame

        // console.warn("swirl color", color)
        // console.warn("swirl rotation", circleRotation)

        return (
          <div
            css={dynamicSquiggles(circleRotation, color, swirlDiameter)}
            key={index}
          />
        )
      })}
    </div>
  )
}

export default MagicBorder