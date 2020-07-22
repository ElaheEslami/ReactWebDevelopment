import React, { useRef, Component } from 'react';
import {
	Jumbotron,
	Container,
	NavbarBrand,
	Navbar,
	Nav,
} from 'react-bootstrap';
import '../cssfiles/section3.css';

class Fullbackgroundtest extends Component {
	constructor(props) {
		super(props);
		this.cursor = React.createRef();
	}
	render() {
		return (
			<>
				<section className="agenceBanner">
					<div className="banner">
						<header className="agenceHeader">
							<a href="agence" className="agenceLogo">
								NotionCrew
							</a>
							<div className="agenceToggle"></div>
						</header>
						<img src="/images/camera.jpg" alt="" />
						<div className="agenceContent">
							<h1>Succes by design</h1>
						</div>
					</div>
				</section>
			</>
		);
	}
}
export default Fullbackgroundtest;
