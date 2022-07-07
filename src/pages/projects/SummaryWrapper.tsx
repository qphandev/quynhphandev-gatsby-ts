import React from 'react'

import "../../styles/projectpage.scss";

interface ISummaryWrapperProps {
    title?: string,
    subtitle?: string,
    description: string
}

function SummaryWrapper({description, title, subtitle}: ISummaryWrapperProps) {
    return (
        <>
            <div className="project-page">
                {title && <h1 className="text-wrap-center" id="project-header">{title}</h1>}
                {subtitle && <h2 className="text-wrap-center" id="project-sub-header">{subtitle}</h2>}

                <div className="text-body">
                    <h3>Summary:</h3>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default SummaryWrapper