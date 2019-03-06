import React from "react"
// import { CloudinaryContext, Video, Transformation } from "cloudinary-react"

import BrowserWindow from "./browser-window"

const cloudinaryRootUrl = "https://res.cloudinary.com/dzprezr1g/video/upload/"

const circleStyles = {
  width: '40px',
  height: '40px',
  background: 'green',
  border: '8px solid black',
  borderRadius: '50%'
}

const BrowserButton = ({ 
  width = '40px',
  height = '40px',
  background = 'transparent',
  border = '8px solid black',
  borderRadius = '50%',
  flexGrow = '1',
  padding = 0,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding, justifyContent: 'center'}}>
      <div style={{ width, height, background, border, borderRadius, margin: '0 auto' }}></div>
    </div>
  )
}

const ProjectBlock = ({videoId}) => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        margin: "auto",
        fontSize: "16px",
        maxWidth: "640px",
        maxHeight: "420px",
      }}
    >
      <div
      >
        <div style={{ margin: "0 auto", width: '100%', position: 'relative' }}>
          {/* <div style={{ position: 'relative', zIndex: '50'}}>
            <BrowserWindow />
          </div> */}
          <div style={{ border: '8px solid black', borderRadius: "10px", display: "flex", flexDirection: "column" }} >
            <div style={{borderBottom: '8px solid black'}}>
              <div className="spacer" style={{ height: '60px', width: '100%', display: 'flex'}}>
              <div style={{flex: '1', flexDirection: 'row', display: 'flex', justifyContent:'space-between'}}>
                <BrowserButton />
                <BrowserButton />
                <BrowserButton />
              </div>
                <div style={{flex: '3'}}>im the searchbar</div>
              </div>
            </div>
            <video muted width="100%" src={`${cloudinaryRootUrl}/${videoId}.mp4`} />
          </div>
        
          {/* <CloudinaryContext cloudName="dzprezr1g">
            <div style={{
              maxWidth: 1600,
              maxHeight: 900
            }}>
            <Video controls autoplay autoPlay muted width={900} publicId={videoId}>
              <Transformation  autoplay autoPlay muted width={900} quality="10" duration="10" />
            </Video>
            </div>
          </CloudinaryContext> */}
        </div>
      </div>
    </div>
  </div>
)

export default ProjectBlock