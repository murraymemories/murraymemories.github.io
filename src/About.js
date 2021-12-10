import './App.css';
import Top from './Top.js';

function About() {

	return (
		<div className="App">
        
            <Top />

            <div className="center-text">
	            <p> This is a site to keep photos and memories about our family! </p>
	            <a href="https://github.com/murraymemories/murraymemories.github.io" rel="noreferrer" target="_blank"> Source repo here </a>
	        </div>

        </div>
	);
}

export default About;
