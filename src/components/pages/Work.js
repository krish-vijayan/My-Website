import React from 'react';
import '../../App.css';

function Work() {
	return (
		<>
			<div className='work-top'>
				<h1 className='work-font'>Work</h1>
			</div>
			<div className='work-bottom'>
				<h2>Skills</h2>
				<ul className='work-list'>
					<li>React JS, Node JS, REST, GraphQL</li>
					<li>Adobe Experience Manager</li>
					<li>CSS, JavaScript, HTML</li>
					<li>Netlify, Heroku, GitHub</li>
					<li>AutoCAD, SolidWorks</li>
					<li>Adobe Photoshop, Adobe Premiere Pro</li>
					<li>UX/UI, performance checking, documentation</li>
				</ul>

				<h2>Work Experience</h2>
				<ul className='work-list'>
					<li>Thomson Reuters (JR Architect Intern)</li>
					<li>Elections Ontario (Resource Staff/Tech Support, Supervisor)</li>
				</ul>
			</div>
		</>
	);
}

export default Work;
