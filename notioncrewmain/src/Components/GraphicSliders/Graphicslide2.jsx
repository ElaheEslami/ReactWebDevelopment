import React, { useRef, Component } from 'react';
import GraphicImageslide2 from './GraphicImgsliders/graphicimageslider2';
import '../../cssfiles/Graphicslides.css';
import Slide from 'react-reveal/Slide';
class Graphicslide2 extends Component {
	constructor(props) {
		super(props);
		this.cursor = React.createRef();
	}
	render() {
		return (
			<>
				<section className="Graphic-slides">
					<div className="containerGraphic-slides">
						<header className="headerGraphic-slides"></header>
						<div className="contentGraphic-slides">
							<div className="bannertextGraphic-slides">
								<Slide left>
									<div>
										<h2>a complete website</h2>
										<p>
											The alliance of the passion for beer from <br />{' '}
											Microbrasserie À la Fût and our passion for the Web <br />{' '}
											allowed us to create a digital work of <br /> art that
											reflects
										</p>
									</div>
								</Slide>
							</div>
							<div className="imgbannerGraphic-slides">
								<GraphicImageslide2 />
							</div>
						</div>
						<div className="icons">
							<ul className="social">
								<li>
									<a href="#">
										<img src="/images/facebook.png" alt="" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src="/images/instagram.png" alt="" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src="/images/play-button.png" alt="" />
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
export default Graphicslide2;
