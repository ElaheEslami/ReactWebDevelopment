import React, { Component } from 'react';
import Videopage1 from './Videoslide1';
import '../../cssfiles/vfxpage.css';
import Slide from 'react-reveal/Slide';
class Vfxpage1 extends Component {
	render() {
		return (
			<section className="vfx-slide" id="VFXSLIDE">
				<div className="containervfx-slide">
					<header className="headervfx-slide">
						<a href="#" className="logo">
							Notion <span>Crew</span>
						</a>
					</header>
					<div className="contentvfx-slide">
						<div className="bannertextvfx-slide">
						<Slide bottom>
							<div>
								<h2>a complete website</h2>
								<p>
									The alliance of the passion for beer from Microbrasserie À la
									Fût and our passion for the Web allowed us to create a digital
									work of art that reflects the western atmosphere of
								</p>
							</div>
							 </Slide>
						</div>
						<div className="imgbannervfx-slide">
							<Videopage1 />
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
		);
	}
}
export default Vfxpage1;
