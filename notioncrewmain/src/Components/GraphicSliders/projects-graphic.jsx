import React, { useRef, Component } from 'react';
import {
	Jumbotron,
	Container,
	NavbarBrand,
	Navbar,
	Nav,
} from 'react-bootstrap';
import '../../cssfiles/projects-graphic.css';
import Fade from 'react-reveal/Fade';
class ProjectsGraphic extends Component {
	constructor(props) {
		super(props);
		this.cursor = React.createRef();
	}
	render() {
		return (
			<>
				<section className="graphicbanner" id="projects" data-anchor="projects">
					<div className="projectsGraphicBanner">
						<img src="/project2.svg" alt="" />
						<div className="graphicContent">
							<Fade bottom>
								<span className="text1">Our projects</span>
							</Fade>

							<Fade top>
								<span className="text2">Graphics</span>
							</Fade>
						</div>
					</div>
				</section>
			</>
		);
	}
}
export default ProjectsGraphic;
