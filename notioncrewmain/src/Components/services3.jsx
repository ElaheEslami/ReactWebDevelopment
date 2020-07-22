import React, { Component } from 'react';
import '../cssfiles/services1.css';
import Slide from 'react-reveal/Slide';
class Services3 extends Component {
	render() {
		return (
			<>
				<section className="services1card">
					<Slide top>
						<div className="servicesContainer">
							<div className="servicesCard">
								<div className="servicesimg">
									<img src="/film.png" alt="" />
								</div>
								<div className="servicesContent">
									<h2>PROMOTIONAL VIDEO</h2>
									<p>
										A promotional or promo video is an effective tool used to
										market a particular product or service. It can be in the
										form of a corporate video or a music video.
									</p>
								</div>
							</div>
						</div>
					</Slide>
					<Slide bottom>
						<div className="servicesContainer">
							<div className="servicesCard">
								<div className="servicesimg">
									<img src="/coding-language.png" alt="" />
								</div>
								<div className="servicesContent">
									<h2>WEB DESIGN</h2>
									<p>
										The basic elements of photography are to capture a mood,
										emotion or feeling that can elicit in a viewer. Our
										photographers approach their work as artists whose job is to
										tell a captivating story.
									</p>
								</div>
							</div>
						</div>
					</Slide>
				</section>
			</>
		);
	}
}
export default Services3;
