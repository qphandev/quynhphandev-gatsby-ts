import React from 'react';

import About from "./about";
import Blog from "./blog";
import Layout from '../components/Layout';
import Header from '../components/Header';
import PortfolioItem from '../components/PortfolioItem';

// Images

const Projects = () => {
	return (
		<Layout>

			<div className="projects-grid-container">
				<PortfolioItem />
				<PortfolioItem />
				<PortfolioItem />
				<PortfolioItem />

				<PortfolioItem />
				<PortfolioItem />
				<PortfolioItem />
				<PortfolioItem />
			</div>

		</Layout>
	)
}

export default Projects