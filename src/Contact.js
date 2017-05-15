import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
		<header id="header">
	        <section className="wrapper style1 content">
				<header className="major">
					<h2>Contact Me</h2>
					<p>boone.osborn@gmail.com</p>
				</header>
				<form method="post" action="MailHandler.php">
					<div>
						<div className="row half">
							<div className="12u">
								<input type="text" name="name" id="name" placeholder="Name" />
							</div>
							<div className="12u">
								<input type="text" name="email" id="email" placeholder="Email" />
							</div>
						</div>
						<div className="row half">
							<div className="12u">
								<input type="text" name="subject" id="subject" placeholder="Subject" />
							</div>
						</div>
						<div className="row half">
							<div className="12u">
								<textarea name="message" id="message" placeholder="Message"></textarea>
							</div>
						</div>
						<div className="row">
							<div className="12u">
						      <ul className="actions">
						        <li><a href="#" className="button">Send</a></li>
								<li><a href="#" className="button">Clear</a></li>
								</ul>
							</div>
						</div>
					</div>
				</form>
			</section>
		</header>
	);
  }
}

export default Contact;