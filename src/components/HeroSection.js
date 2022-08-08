import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
	return (
		<div className='hero-container'>
			<video src='/videos/video-1.mp4' autoPlay loop muted />
			<h1>Krish Vijayan</h1>
			<p> 2A Mechatronics Engineering Student</p>

			<img src='/images/pfp.jpg' className='pfp' />
		</div>
	);
}

export default HeroSection;
