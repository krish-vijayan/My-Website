import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function Contact() {
	const [email, setEmail] = useState(null);
	const [discord, setDiscord] = useState(null);

	const handlingEmail = () => {
		setEmail('kvijayan@uwaterloo.ca');
	};
	const handlingDiscord = () => {
		setDiscord('KV7#6954');
	};

	window.scrollTo({
		top: 0,
	}); /*This will automatically scroll the page to the top*/
	return (
		<>
			<div className='contact-top'>
				<h1 className='contact-font'>Contact Information</h1>
			</div>

			<div className='contact-bottom'>
				<ul className='contact-info'>
					<li>
						<i
							class='fa-solid fa-envelope'
							onClick={() => {
								window.open(
									'mailto:email@example.com?subject=Subject&body=Body%20goes%20here'
								);
								handlingEmail();
							}}
						></i>
						Email {email}
					</li>

					<li>
						<i
							class='fa-brands fa-linkedin'
							onClick={() =>
								window.open(
									'https://www.linkedin.com/in/krish-vijayan-617263219',
									'_blank'
								)
							}
						/>
						LinkedIn
					</li>

					<li>
						<i
							class='fa-brands fa-github'
							onClick={() =>
								window.open('https://github.com/krish-vijayan', '_blank')
							}
						/>
						Github
					</li>

					<li>
						{' '}
						<i
							class='fa-brands fa-discord'
							onClick={() => {
								window.open('https://discordapp.com/users/KV7#6954/', '_blank');
								handlingDiscord();
							}}
						/>
						Discord {discord}
					</li>
				</ul>
			</div>
		</>
	);
}

export default Contact;
