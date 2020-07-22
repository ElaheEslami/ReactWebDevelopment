/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';
import Fullbackground from './Components/section1';
import Form from './Components/section5';
import ProjectsGraphic from './Components/GraphicSliders/projects-graphic';
import Projectsphotography from './Components/PhotographySliders/projects-photography';
import Projectsvideo from './Components/VfxSliders/projects-vfx';

import Graphicslide5 from './Components/GraphicSliders/Graphicslide5';
import Graphicslide2 from './Components/GraphicSliders/Graphicslide2';
import Graphicslide4 from './Components/GraphicSliders/Graphicslide4';
import Graphicslide3 from './Components/GraphicSliders/Graphicslide3';
import Graphicslide6 from './Components/GraphicSliders/Graphicslide6';
import Graphicslide7 from './Components/GraphicSliders/Graphicslide7';

import Photoslide2 from './Components/PhotographySliders/Photoslide2';
import Photoslide3 from './Components/PhotographySliders/Photoslide3';
import Photoslide4 from './Components/PhotographySliders/Photoslide4';
import Photoslide5 from './Components/PhotographySliders/Photoslide5';
import Photoslide6 from './Components/PhotographySliders/Photoslide6';
import Photoslide7 from './Components/PhotographySliders/Photoslide7';

import Vfxpage1 from './Components/VfxSliders/Vfxslide1';
import Vfxpage2 from './Components/VfxSliders/Vfxslide2';
import Services1 from './Components/services1';
import Services2 from './Components/services2';
import Services3 from './Components/services3';

import Cardteam from './Components/section2';
import ResponsivePlayer from './Components/section4';
import Fullbackgroundtest from './Components/section3';
import Footer from './Components/section6';
class FullpageWrapper extends React.Component {
	onLeave(origin, destination, direction) {
		console.log('Leaving section ' + origin.index);
	}
	afterLoad(origin, destination, direction) {
		console.log('After load: ' + destination.index);
	}
	render() {
		return (
			<ReactFullpage
				offsetSections={false} //used to show non full screen section parts
				resetSliders={false}
				controlArrows={true}
				animateAnchor={true}
				keyboardScrolling={true}
				dragAndMove={true}
				fadingEffect={'slides'}
				menu={'#menu'} // menu for anchors
				loopHorizontal={true}
				licenseKey={'GPLv3'}
				activeClass={'active'} //adds an active class to the correct menu button
				anchors={[
					'notioncrew',
					'services',
					'graphics',
					'photography',
					'video',
					'contacts',
					'ourteam',
					'clients',
				]}
				lockAnchors={false} //anchor feature
				navigation={true} //enables cool dots
				arrowNavigation={true} //enables arrows for slides
				slidesNavigation={true}
				slidesNavPosition={'bottom'}
				navigationTooltips={[
					'HOME',
					'SERVICES',
					'GRAPHICS',
					'PHOTOGRAPHY',
					'VIDEO',
					'CONTACTS',
					'TEAM',
					'CLIENTS',
				]} //tooltips for the navdots
				parallax={true}
				scrollingSpeed={1000} /* used this for something to work... */
				sectionsColor={[]}
				scrollBar={false}
				easing={'easeInOutCubic'}
				easingcss3={'cubic-bezier(0.175,0.855,0,320,1.275)'}
				css3={false}
				autoScrolling={true}
				fitToSection={true}
				fixedElements={'#navbar'}
				loopBottom={true}
				loopTop={true}
				scrollOverflow={false}
				sectionsColor={[
					'#115373',
					'#1270a3',
					'',
					'',
					'',
					'#0b3a42',
					'#0b3a42',
					'#0d19a3',
				]}
				onLeave={this.onLeave.bind(this)}
				afterLoad={this.afterLoad.bind(this)}
				render={({ state, fullpageApi }) => {
					return (
						<div id="fullpage-wrapper">
							<div className="section section1">
								<Fullbackground />
							</div>
							{/* <div className="section section2">
								<ResponsivePlayer />
							</div> */}

							<div className="section section3" data-anchor="services">
								<div className="slide" active>
									<Services1 />
								</div>
								<div className="slide">
									<Services2 />
								</div>
								<div className="slide">
									<Services3 />
								</div>
							</div>
							<div className="section" data-anchor="graphics">
								<div className="slide" active>
									<ProjectsGraphic />
								</div>
								<div className="slide">
									<Graphicslide2 />
								</div>
								<div className="slide">
									<Graphicslide3 />
								</div>
								<div className="slide">
									<Graphicslide4 />
								</div>
								<div className="slide">
									<Graphicslide5 />
								</div>
								<div className="slide">
									<Graphicslide6 />
								</div>
								<div className="slide">
									<Graphicslide7 />
								</div>
							</div>
							<div className="section">
								<div className="slide">
									<Projectsphotography />
								</div>
								<div className="slide">
									<Photoslide2 />
								</div>
								<div className="slide">
									<Photoslide3 />
								</div>
								<div className="slide">
									<Photoslide4 />
								</div>
								<div className="slide">
									<Photoslide5 />
								</div>
								<div className="slide">
									<Photoslide6 />
								</div>
								<div className="slide">
									<Photoslide7 />
								</div>
							</div>
							<div className="section">
								<div className="slide">
									<Projectsvideo />
								</div>
								<div className="slide">
									<Vfxpage1 />
								</div>
								<div className="slide">
									<Vfxpage2 />
								</div>
							</div>

							{/* <div className="section">
								<Services2 />
							</div> */}

							<div className="section" active data-anchor="contacts">
								<Form />
								{/* <button onClick={() => fullpageApi.moveTo(1, 0)}>
									Move top
								</button> */}
							</div>
							<div className="section">
								<Cardteam />
							</div>
							<div className="section">
								<Footer />
								{/* <button onClick={() => fullpageApi.moveTo(1, 0)}>
									Move top
								</button> */}
							</div>
						</div>
					);
				}}
			/>
		);
	}
}

export default FullpageWrapper;
