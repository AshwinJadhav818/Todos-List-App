import React, { useState } from 'react';
import Axios from 'axios';

export default function Contact() {
	const [email, setEmail] = useState('');
	const [desc, setDesc] = useState('');
	const [btnText, setBtnText] = useState('Submit');

	function submit(e) {
		Axios({
			method: 'POST',
			url: 'https://todos-list-backend.herokuapp.com/contact',
			data: {
				email: email,
				desc: desc,
			},
		}).then((res, req) => {
			console.log(res.data);
			setBtnText('Submitted');
		});
		e.preventDefault();
	}

	return (
		<section>
			<h1 className="b-650 text-center">Contact Us</h1>
			<form className="form" onSubmit={submit}>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email address
					</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="form-control"
						id="email"
						name="email"
						placeholder="Enter Your Email Here"
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="desc" className="form-label">
						Description
					</label>
					<textarea
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
						className="form-control"
						id="desc"
						rows="3"
						name="desc"
						placeholder="Enter Your Description Here"
						required
					></textarea>
				</div>
				<div className="mb-3">
					<button type="submit" className="btn btn-outline-primary">
						{btnText}
					</button>
				</div>
			</form>
		</section>
	);
}
