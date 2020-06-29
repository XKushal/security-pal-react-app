import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import img1 from './../Images/hero-img.png';

class About extends Component {
	render() {
		return (
			<div>
				<Header />
				<section id="hero" className="d-flex align-items-center">
					<div className="container">
						<div className="row">
							<div
								className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								<h1>Automate Security Reviews & Questionnaires </h1>
								<h2>
									Infosec & vendor questionnaires occupy a disproportionate amount of time for Sales,
									Security, and Engineering leaders. SecurityPal helps you put this on auto-pilot so
									you can keep the focus on what's important; your product & customers.
								</h2>
							</div>
							<div
								className="col-lg-6 order-1 order-lg-2 hero-img"
								data-aos="zoom-in"
								data-aos-delay="200"
							>
								<img src={img1} className="img-fluid animated" alt="" />
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		);
	}
}

export default About;
