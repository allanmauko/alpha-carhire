import React from 'react'
import "./Contact.css"

function Contact(){
  return (
    <div className="container">
		<div className="contact-boxx">
			<div className="lefty"></div>
			<div className="righty">
				<h2>About us.</h2>
				<input type="text" className="field" placeholder="Honestly Passion Class." />
			</div>
		</div>
	</div>
  )
}

export default Contact