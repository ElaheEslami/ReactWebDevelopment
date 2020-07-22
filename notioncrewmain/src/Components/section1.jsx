import React, { useRef, Component } from 'react';
import { motion } from 'framer-motion';
import MyHeader from './stickyheader';
import Slide from 'react-reveal/Slide';
import '../cssfiles/section1.css';
import Menu2 from './menu';
class Fullbackground extends Component {
	constructor(props) {
		super(props);
		this.cursor = React.createRef();
	}
	render() {
		return (
			<>
				<section className="background">
					<div className="fullvideo">
						<div className="header">
							<Menu2 />
							{/* <ul id="menu">
								<li class="active" active data-menuanchor="services" active>
									<a href="#services">Services</a>
								</li>
								<li id="line" data-menuanchor="graphics">
									<a href="#graphics">Projects</a>
								</li>

								<li id="line2">
									<a href="#contacts" data-menuanchor="contacts">
										Contacts
									</a>
								</li>
							</ul> */}
						</div>
						{/* <video src="../../background.mp4" autoPlay muted loop></video> */}
						<div className="videotext">
							<h1>NotionCrew</h1>
							<div className="videotext2">
								<p>
									<span>
										Notioncrew Creative Agency was founded in 2018 by an
										experienced and <br /> professional team,Working in various
										Visual fields . Our main strenght point
										<br />
										is our ability in Visual work Through this relatively short
										period
									</span>
								</p>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}
export default Fullbackground;
