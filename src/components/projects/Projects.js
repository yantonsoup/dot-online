import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import Project from "./Project"

const PRISMIC_CONTACT_QUERY = graphql`
  query Projects {
    allPrismicProjects {
      edges {
        node {
          id
          data {
            slug
            project_website {
              url
            }
            project_image {
              url
            }
            project_video {
              url
            }
            project_text {
              html
            }
          }
        }
      }
    }
  }
`

function normalizeProjectData(allPrismicProjects) {
  console.warn(allPrismicProjects)
  const projectData = allPrismicProjects.edges.reduce(
    (projectsBySlug, project) => {
      const {
        node: {
          id,
          data: {
            slug,
            project_website,
            project_text,
            project_image,
            project_video,
          },
        },
      } = project

      const normalizedProject = {
        id,
        link: project_website.url,
        videoSrc: project_video.url,
        imageSrc: project_image.url,
        htmlDescription: project_text.html,
      }

      return {
        [slug]: normalizedProject,
        ...projectsBySlug,
      }
    },
    {}
  )

  return projectData
}

const projectsInOrder = ["ussr", "sperry", "terminal", "dispersion"]

const projectContainer = css`
  padding-bottom: 24px;

  @media (min-width: 768px) {
    padding-bottom: 48px;
  }
`

const Projects = () => {
  const { allPrismicProjects } = useStaticQuery(PRISMIC_CONTACT_QUERY)
  const projectsBySlug = normalizeProjectData(allPrismicProjects)

  return (
    <div id="projects" css={projectContainer}>
      {projectsInOrder.map((projectSlug, index) => (
        <Project key={index} data={projectsBySlug[projectSlug]} />
      ))}
    </div>
  )
}

export default Projects
