import React from "react"
import { graphql } from "gatsby"
import '../../styles/projectpage.scss'
import { Link } from "gatsby"

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark
	return (
		<div className="project-page-container">
			<div className="sticky-nav"><Link className="sticky-link" to='/'>← back</Link></div>
			<div className="blog-post">
				<h1>{frontmatter.title}</h1>
				<div
					className="blog-post-content"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
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
      }
    }
  }
`