import './App.css';
import Top from './Top.js';
import Clouds from './Clouds.js';
import { ReactComponent as Hills } from './hills.svg';

function About() {

	return (
		<div className="App">
        
            <Top />

            <div className="center-text">
	            <p> This is a site to keep photos and memories about our family! <br/> Made by Oscar </p>
	            <a href="https://github.com/murraymemories/murraymemories.github.io" rel="noreferrer" target="_blank"> Source repo here </a>
	        </div>

            <Hills />
            <Clouds />

        </div>
	);
}

export default About;
