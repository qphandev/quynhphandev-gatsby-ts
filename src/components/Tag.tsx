import React from 'react'
import "../styles/tags.scss";

interface ITagProps {
    label?: string
}

const Tag = ({label = "tag"}: ITagProps) => {
    return (
        <div className="tag">{label}</div>
    )
}

export default Tag