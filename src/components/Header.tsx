import React from 'react'
import { Link } from 'gatsby'
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

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
                    <p>Welcome to my portfolio for Web Design and Development &#40;:</p>
                    <Link target="_blank" to="/quynhphan_resume.pdf">RESUME</Link>
                    <div className="social-container">
                        <Link target="_blank" to="https://www.instagram.com/quynhs_here/"> <FaInstagram /> &nbsp; /quynhs_here </Link>
                        <Link target="_blank" to="https://github.com/qphandev"> <FaGithub /> &nbsp; /qphandev </Link>
                    </div>

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