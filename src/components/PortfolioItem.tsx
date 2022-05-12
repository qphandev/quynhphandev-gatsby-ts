import React from 'react'

import '../styles/portfolio-item.scss';
import Tag from './Tag';

/**
 * Title, date, summary, stack or tags...?
 */

function PortfolioItem() {
    return (
        <div className="portfolio-item-container">
            <div className="portfolio-item-image">
                <img src={} alt="knightgame thumbnail" />
            </div>
            <div className="portfolio-item-description">
                <h2 className="title">Some title</h2>
                <div className="summary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, cum blanditiis beatae veritatis a labore corporis, modi provident alias fugit porro quam vero accusantium harum dolorem saepe sint recusandae eligendi.</div>
                <div className="tags-container">
                    <Tag />
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem