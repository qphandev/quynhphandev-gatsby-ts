import { Link } from 'gatsby'
import React from 'react'

/**
 * 1. Tabs? https://blog.logrocket.com/how-to-build-tab-component-react/
 * 2. Header should contain: resume, github, medium, youtube
 */

const Header = () => {
    return (
        <>
            <header>
                <div className="header-content">
                    <h2>Hiya, I'm Quynh</h2>
                    <div className="separator-yellow" />
                    <p>Welcome to my portfolio for Web Design and Development.</p>
                    <a href="quynhphan_resume.pdf">RESUME</a>
                </div>
            </header>
            <nav>
                <Link to="/" activeClassName="active-nav">Projects</Link>
                <Link to="/about" activeClassName="active-nav">About</Link>
                <Link to="/blog" activeClassName="active-nav">Blog</Link>
            </nav>
        </>
    )
}

export default Header