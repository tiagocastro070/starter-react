/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
import React from 'react';
import TinySlider from 'tiny-slider-react';

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	buildSlides() {
		const imgs = ['https://via.placeholder.com/300x101', 'https://via.placeholder.com/300x102', 'https://via.placeholder.com/300x103', 'https://via.placeholder.com/300x104', 'https://via.placeholder.com/300x105']

		return imgs.map((el, index) => (
			<div key={index} style={{ position: "relative" }}>
				<img
					className={`tns-lazy-img`}
					src='https://via.placeholder.com/10x10'
					data-src={el}
					alt="" />
				Esta é a imagem número {index + 1}
			</div>
		))
	}
	
	render() {
		const settings = {
			items: 2,
			lazyload: true,
			nav: true,
			dots: true,
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