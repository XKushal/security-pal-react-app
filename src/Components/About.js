import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import hero from './../Images/hero-img.png';
import subscribe from './../subscribe.php';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import img from './../Images/testimonials.jpg';
import img1 from './../Images/testimonials-1.jpg';
import img2 from './../Images/testimonials-2.jpg';
import img3 from './../Images/testimonials-3.jpg';
import img4 from './../Images/testimonials-4.jpg';
import img5 from './../Images/testimonials-5.jpg';
import img6 from './../Images/testimonials-6.jpg';
import img7 from './../Images/testimonials-7.jpg';

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
								data-aos="fade-down"
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
								<img src={hero} className="img-fluid animated" alt="" />
							</div>
						</div>
					</div>
				</section>
				<footer id="footer">
					<section className="newsletter text-center wow fadeInUp" id="newsletter">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-md-9 col-lg-6">
									<form action={subscribe} className="form-inline" method="POST">
										<input
											className="form-control "
											name="Email"
											placeholder="Email"
											type="Email"
										/>
										<button className="btn btn-default" type="submit">
											Request Info
										</button>
									</form>
								</div>
							</div>
						</div>
					</section>
				</footer>

				<section id="testimonials" className="testimonials section-bg">
					<div className="container" data-aos="fade-up">
						<div className="section-title">
							<h2>Customer Love</h2>
						</div>
						<OwlCarousel
							className="owl-theme"
							loop={true}
							items={1}
							dots={false}
							dotsEach={false}
							data-aos="zoom-in" 
							nav={true}
							rewind
							autoplay={true}
							autoplayTimeout={4000}
							autoplaySpeed={500}
						>
							<div className="testimonial-item">
								<h3> Founder of Atrium </h3>
								<img src={img1} className="testimonial-img" alt="" />
								<p>
									" SecurityPal is a massive timesaver. A total no-brainer for any sales or security
									organization."{' '}
								</p>
							</div>
							<div className="testimonial-item">
								<img src={img2} className="testimonial-img" alt="" />
								<h3>Head of Security @ Sequoia backed Series B Startup</h3>
								<p>
									"I love your product...SecurityPal gives me much needed burst capacity so a deal
									never slows down for the sales team."
								</p>
							</div>
							<div className="testimonial-item">
								<img src={img7} className="testimonial-img" alt="" />
								<h3>Sales Engineering Leader @ a hyper-growth startup</h3>

								<p>
									"Only positive feedback in my end, turnaround time has always been quick (sometimes
									quicker than expected) and like that it helps your team to stay focused on material
									security."
								</p>
							</div>
							<div className="testimonial-item">
								<img src={img3} className="testimonial-img" alt="" />
								<h3>Director of Security @ SF based Unicorn</h3>

								<p>
									{' '}
									"As a Security leader, SecurityPal is one of the best investments I have made. It's
									helped us ensure that we are spending our precious time improving the security of
									our product and organization instead of filling out repetitive security review
									documents & questionnaires."{' '}
								</p>
							</div>
							<div className="testimonial-item">
								<img src={img5} className="testimonial-img" alt="" />
								<h3>Senior Account Executive @ UK Based Series C Company </h3>
								<p>
									"Admittedly, I was a bit skeptical about SecurityPal but you all are doing a
									fantastic job to quickly help us through these security reviews."
								</p>
							</div>
							<div className="testimonial-item">
								<img src={img} className="testimonial-img" alt="" />
								<h3>Enterprise Sales Leader @ another SF Based Unicorn</h3>
								<p>
									"We've been so, so pleasantly surprised as how large of a time-saving impact working
									with SecurityPal has been — our Sales Engineers now spend less than 5% of their time
									on security review related work (previously ranged between 15-30% depending on
									pipeline and deal stage), and now spend that time engaging with customers and
									selling teams. Pretty rare when something genuinely exceeds expectations, but this
									was the case."
								</p>
							</div>
							<div className="testimonial-item">
								<img src={img6} className="testimonial-img" alt="" />
								<h3>Sales Engineering Leader @ a hyper-growth startup</h3>
								<p>
									" We use SecurityPal as like a sales negotiating tactic; helping create more
									leverage in deals while saving lots of time."
								</p>
							</div>

						</OwlCarousel>
						<br/><br/>
						<h6 style={{color:"#277197"}}>
							We take the privacy and security needs of our customers very seriously. Therefore, we do not
							expose the logos of customers who have requested privacy. Feel free to reach out to us if
							you would like to be directly connected to a SecurityPal user. Thank you!
						</h6>
						
					</div>
				</section>

				<Footer />
			</div>
		);
	}
}

export default About;
