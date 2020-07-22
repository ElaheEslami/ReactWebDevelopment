import React, { useRef, Component } from 'react';
import GraphicImageslide3 from './GraphicImgsliders/graphicimageslider3';
import '../../cssfiles/Graphicslides.css';
import Slide from 'react-reveal/Slide';
class Graphicslide3 extends Component {
	constructor(props) {
		super(props);
		this.cursor = React.createRef();
	}
	render() {
		return (
			<>
				<section className="Graphic-slides">
					<div className="containerGraphic-slides">
						<header className="headerGraphic-slides">
							<a href="#" className="logo">
								Notion <span>Crew</span>
							</a>
						</header>
						<div className="contentGraphic-slides">
							<div className="bannertextGraphic-slides">
									<Slide left>
								<div>
								
									<h2>a complete website</h2>
									<p>
										The alliance of the passion for beer from Microbrasserie À
										la Fût and our passion for the Web allowed us to create a
										digital work of art that reflects the western atmosphere of
									</p>
								</div>
								</Slide>
							
							</div>
							<div className="imgbannerGraphic-slides">
								<GraphicImageslide3 />
							</div>
						</div>
						<div className="icons">
							<ul className="social">
								<li>
									<a href="#">
										<img src="../../facebook.png" alt="" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src="../../instagram.png" alt="" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src="../../play-button.png" alt="" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</>
		);
	}
}
export default Graphicslide3;
