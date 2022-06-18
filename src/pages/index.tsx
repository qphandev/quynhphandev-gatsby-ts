import React from 'react';

import About from "./about";
import Blog from "./blog";
import Layout from '../components/Layout';
import Header from '../components/Header';
import PortfolioItem from '../components/PortfolioItem';
import { graphql } from 'gatsby';
import { GatsbyImage, GatsbyImageProps, IGatsbyImageData } from 'gatsby-plugin-image';

interface IProjectsProps {
	data: {
		allMarkdownRemark: {
			nodes: {
				id: string,
				frontmatter: {
					title: string,
					subtitle: string,
					stack: string,
					slug: string,
					date: string,
					thumb: {
						childrenImageSharp: {
							gatsbyImageData: IGatsbyImageData
						}
					},
					summary: string
				}
			}[]
		}
	}
}

const Projects = ({ data }: IProjectsProps) => {

	const projectNodes = data.allMarkdownRemark.nodes;

	return (
		<Layout>
			<div className="projects-grid-container">
				{projectNodes.map((project, index) => {
					return (
						// <PortfolioItem
						// 	key={`portfolio-item-${index}`}
						// 	title={project.frontmatter.title}
						// 	subtitle={project.frontmatter.subtitle}
						// 	slug={project.frontmatter.slug}
						// 	date={project.frontmatter.date}
						// 	thumb={
						// 		<GatsbyImage image={project.frontmatter.thumb.childrenImageSharp.fluid} alt='temp' />
						// 	}
						// 	summary={project.frontmatter.summary}
						// />
						<GatsbyImage image={project.frontmatter.thumb.childrenImageSharp.gatsbyImageData} alt='temp' />
					)
				})}
			</div>

		</Layout>
	)
}

export const pageQuery = graphql`
query MyQuery {
	allMarkdownRemark {
		nodes {
		  frontmatter {
			title
			subtitle
			stack
			slug
			date
			summary
			thumb {
			  childrenImageSharp {
				gatsbyImageData
			  }
			}
		  }
		}
	  }
	}
`

export default Projects