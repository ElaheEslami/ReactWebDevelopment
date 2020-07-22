import React, { Component } from 'react';
import '../cssfiles/services1.css';
import Slide from 'react-reveal/Slide';
class Services1 extends Component {
	render() {
		return (
			<>
				<section className="services1card">
					<Slide top>
						<div className="servicesContainer">
							<div className="servicesCard">
								<div className="servicesimg">
									<img src="/design.png" alt="" />
								</div>
								<div className="servicesContent">
									<h2>GRAPHIC DESIGN</h2>
									<p>
										In order words, graphic design is synonymous with
										advertising industry. This is because the nature of
										advertising is such that it thrives visual representations
										of products, services, concepts and ideas.
									</p>
								</div>
							</div>
						</div>
					</Slide>
					<Slide bottom>
						<div className="servicesContainer">
							<div className="servicesCard">
								<div className="servicesimg">
									<img src="/photo-camera.png" alt="" />
								</div>
								<div className="servicesContent">
									<h2>PHOTOGRAPHY</h2>
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
export default Services1;
