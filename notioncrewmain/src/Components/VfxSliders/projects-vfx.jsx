import React, { useRef, Component } from 'react';
import {
	Jumbotron,
	Container,
	NavbarBrand,
	Navbar,
	Nav,
} from 'react-bootstrap';

import '../../cssfiles/projects-vfx.css';
import Fade from 'react-reveal/Fade';
class Projectsvideo extends Component {
	constructor(props) {
		super(props);
		this.cursor = React.createRef();
	}
	render() {
		return (
			<>
				<section className="VFXbanner">
					<div className="projectsVFXBanner">
						<img src="/video.svg" alt="" />

						<div className="VFXContent">
							
						
																				        <Fade bottom>
         <span className="text1">Our projects</span>
        </Fade>
							
							        <Fade top>
	<span className="text2">VFX & VIDEO</span>
        </Fade>
						</div>
					</div>
				</section>
			</>
		);
	}
}
export default Projectsvideo;
