import React from 'react';
import PhotoImageslide5 from './PhotoImgslider/PhotoImgslider5';
import Fade from 'react-reveal/Fade';
import '../../cssfiles/Photoslide.css';
const Photoslide5 = () => {
	return (
		<section className="Photo-slide" id="PHOTOSLIDE">
			<div className="containerPhoto-slide">
				<header className="headerPhoto-slide">
					<a href="#" className="logo">
						Notion <span>Crew</span>
					</a>
				</header>
				<div className="contentPhoto-slide">
					<div className="bannertextPhoto-slide">
				<Fade bottom>
						<div>
							<h2>a complete website</h2>
							<p>
								The alliance of the passion for beer from Microbrasserie À la
								Fût and our passion for the Web allowed us to create a digital
								work of art that reflects the western atmosphere of
							</p>
						</div>
						</Fade>
					</div>
					<div className="imgbannerPhoto-slide">
						<PhotoImageslide5 />
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
};

export default Photoslide5;
