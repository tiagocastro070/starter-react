import React from 'react';
import TinySlider from 'tiny-slider-react';

class Home extends React.Component {
	buildSlides() {
		const imgs = ['https://via.placeholder.com/600x301', 'https://via.placeholder.com/600x302', 'https://via.placeholder.com/600x303', 'https://via.placeholder.com/600x304', 'https://via.placeholder.com/600x305']

		return imgs.map((el, index) => (
			<div key={index} className="tns-item" style={{ position: "relative" }}>
				<div className="row">
					<div className="col-8">
						<img
							className={`tns-lazy-img`}
							src='https://via.placeholder.com/10x10'
							data-src={el}
							alt=""
						/>
					</div>
					<div className="col-4 display-4">This is image number {index + 1}</div>
				</div>
			</div>
		))
	}
	
	render() {
		const settings = {
			items: 1,
			lazyload: true,
			nav: true,
			navPosition: 'bottom',
			navAsThumbnails: true,
			controlsPosition: 'bottom',
			controlsText: ["prev", "next"],
			arrowKeys: true,
			mouseDrag: true
		};
		
		return (
			<div className="container">
				<div className="row">
					<div className="col-6 col-sm-10 col-md-6 col-lg-12 col-xl-6">
						<h1>Welcome Message</h1>
						<TinySlider settings={settings}>
							{ this.buildSlides() }
						</TinySlider>
					</div>
				</div>
			</div>
		)
	}

}

export default Home;