import React, { useRef, Component } from 'react';
import {
	Jumbotron,
	Container,
	NavbarBrand,
	Navbar,
	Nav,
} from 'react-bootstrap';

import '../../cssfiles/projects-photography.css';
import Fade from 'react-reveal/Fade';
class Projectsphotography extends Component {
	constructor(props) {
		super(props);
		this.cursor = React.createRef();
	}
	render() {
		return (
			<>
				<section className="PHOTObanner">
					<div className="projectsPHOTOBanner">
						<img src="/photography.svg" alt="" />
						<div className="PHOTOContent">
						
							
													        <Fade bottom>
          	<span className="text1">Our projects</span>
        </Fade>
							
							        <Fade top>
    <span className="text2">photography</span>
        </Fade>
						</div>
					</div>
				</section>
			</>
		);
	}
}
export default Projectsphotography;
