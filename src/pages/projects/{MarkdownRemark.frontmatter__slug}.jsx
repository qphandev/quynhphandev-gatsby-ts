import React from "react"
import { graphql, Link } from "gatsby"
import Footer from '../../components/Footer';

import '../../styles/projectpage.scss'
import '../../styles/queries.scss'

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark
	return (
		<div className="project-page-container">
			<div className="sticky-nav"><Link className="sticky-link" to='/'>← home</Link></div>
			<div className="project-content-container">

				<div className="project-header-container">
					<h1 id="project-header">{frontmatter.title}</h1>
					<h2 id="project-sub-header">{frontmatter.subtitle}</h2>
				</div>

				<div
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
			<Footer />
		</div>
	)
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
		subtitle
      }
    }
  }
`