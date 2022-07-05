import React from 'react'
import '../styles/portfolio-item.scss';
import Tag from './Tag';
import { Link } from 'gatsby';

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
        <div className="portfolio-item-container">
            <div className="portfolio-item-image">
                <Link to={`/projects/${slug}`}>
                    {thumb}
                </Link>
            </div>
            <div className="portfolio-item-description">
                <Link to={`/projects/${slug}`}><h2 className="title">{title}</h2></Link>
                <div className="summary">{summary}</div>
            </div>
        </div>
    )
}

export default PortfolioItem