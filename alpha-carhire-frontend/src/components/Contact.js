import React from 'react'
import "./Contact.css"

function Contact(){
  return (
    <div className="container">
		<div className="contact-boxx">
			<div className="lefty"></div>
			<div className="righty">
				<h2>Contact Us</h2>
				<input type="text" className="field1" placeholder="ALPHA CAR SERVICES" />
				<input type="text" className="field1" placeholder="alphacars@gmail.com" />
				<input type="text" className="field1" placeholder="+254720137715" />
			</div>
		</div>
	</div>
  )
}

export default Contact