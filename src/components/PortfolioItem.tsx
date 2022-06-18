import React from 'react'
import '../styles/portfolio-item.scss';
import Tag from './Tag';
import { GatsbyImage, GatsbyImageProps, StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from 'gatsby';

/**
 * Title, date, summary, stack or tags...?
 */

interface IPortfolioItemProps {
    title: string,
    subtitle: string,
    date: string,
    thumb: JSX.Element,
    slug: string,
    summary: string,
}
function PortfolioItem({ title,
    subtitle,
    date,
    thumb,
    slug,
    summary }: IPortfolioItemProps) {

    // const image = `../images/${thumb}`
    return (
        <Link to={`/projects/${slug}`}>
            <div className="portfolio-item-container">
                <div className="portfolio-item-image">

                    
                </div>
                <div className="portfolio-item-description">
                    <h2 className="title">{title}</h2>
                    <div className="summary">{summary}</div>
                    <div className="tags-container">
                        <Tag />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PortfolioItem

// export const pageQuery = graphql`
//   query {
//     blogPost(id: { eq: $Id }) {
//       title
//       body
//       author
//       avatar {
//         childImageSharp {
//           gatsbyImageData(
//             width: 200
//             placeholder: BLURRED
//             formats: [AUTO, WEBP, AVIF]
//           )
//         }
//       }
//     }
//   }
// `