import React, { Component } from 'react';
import '../cssfiles/services1.css';
import Slide from 'react-reveal/Slide';
class Services2 extends Component {
	render() {
		return (
			<>
				<section className="services1card">
					<Slide top>
						<div className="servicesContainer">
							<div className="servicesCard">
								<div className="servicesimg">
									<img src="/technology (1).png" alt="" />
								</div>
								<div className="servicesContent">
									<h2>PRINGTING SERVICE</h2>
									<p>
										The managed print services definition is broad, but the end
										result is simple: gaining visibility and control of your
										printing, which helps you save money and boost productivity.
									</p>
								</div>
							</div>
						</div>
					</Slide>
					<Slide bottom>
						<div className="servicesContainer">
							<div className="servicesCard">
								<div className="servicesimg">
									<img src="/computer.png" alt="" />
								</div>
								<div className="servicesContent">
									<h2>VFX</h2>
									<p>
										Visual effects (VFX) is a term used to describe imagery
										created, manipulated, or enhanced for any film, or other
										moving media that cannot take place during live-action
										shooting.
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
export default Services2;
