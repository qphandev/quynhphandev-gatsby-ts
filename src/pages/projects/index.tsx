import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'

import knightgame_gif from "../../images/knightgames_homepage_tour.gif";

import "../../styles/projectpage.scss";

const ProjectsMain = () => {
	return (
		<div className="project-page">
			<div className="back-bar">Back button</div>

			<h1 className="text-wrap-center" id="project-header">Title</h1>
			<h2 className="text-wrap-center" id="project-sub-header">Subtitles</h2>

			<div className="text-body">
				<h3>Summary:</h3>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a minus fugiat delectus libero voluptas, nam ipsam? Nesciunt, porro! Placeat ratione alias voluptatum nostrum animi excepturi fuga praesentium corrupti minima!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid velit modi iste aliquam tempora maiores? Quae placeat hic commodi illo porro, rem vel veniam molestias incidunt fugiat modi excepturi fugit!</p>
				<img src={knightgame_gif} alt="" />
			</div>

		</div>
	)
}

export default ProjectsMain