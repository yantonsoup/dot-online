import React, { useState } from "react"
import { Waypoint } from "react-waypoint"

import Layout from "../Layout"
import Duality from "../threejs/Duality"
import Contact from "../contact/Contact"
import Projects from "../projects/Projects"

import SideNav from "../SideNav"
import TopNav from "../TopNav"

import About from "../about/About"
// import MagicBorder from "./MagicBorder"

// import * as COLORS from "../../colors"

const HomeEntry = () => {
  const [pauseDuality, setPauseDuality] = useState(false)
  const [isTransparent, setHeaderTransparent] = useState(false)

  return (
    <Layout>
      {/* <SideNav /> */}
      <div>
        <TopNav isTransparent={isTransparent} />
        <Waypoint
          onEnter={() => {
            setPauseDuality(false)
            setHeaderTransparent(false)
          }}
          onLeave={() => {
            setHeaderTransparent(true)
          }}
        />
        <Duality pauseRender={pauseDuality} />
        <Waypoint
          onEnter={() => {
            setPauseDuality(false)
          }}
          onLeave={() => {}}
        />
      </div>
      <About />
      <Waypoint
        onEnter={() => {
          setPauseDuality(true)
        }}
        onLeave={() => {}}
      />

      {/* <MagicBorder backgroundColor={COLORS.GREY} /> */}
      <Projects />
      {/* <MagicBorder /> */}
      <Contact />
    </Layout>
  )
}

export default HomeEntry
