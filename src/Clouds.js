import { useState } from 'react';
import { ReactComponent as Cloud1 } from './cloud1.svg';
import { ReactComponent as Cloud2 } from './cloud2.svg';
import { ReactComponent as Cloud3 } from './cloud3.svg';
import { rand, randints } from './utility.jsx';


const randDur   = (r,k) => `${ ( 15 + 20 * (r % 1) ) * k }s`;

const randAnim  = (r,k) => { return { animationDelay    : `-${r}s`,
			                          animationDuration : randDur(r,k) }; };

const clouds = [ (r,k) => <Cloud1 key={r} style={ randAnim(r,k) } className="cloud" />,
                 (r,k) => <Cloud2 key={r} style={ randAnim(r,k) } className="cloud" />,
                 (r,k) => <Cloud3 key={r} style={ randAnim(r,k) } className="cloud" /> ];

const getWidth     = () => Math.max( Math.max(document.documentElement.clientWidth  || 0, window.innerWidth  || 0) );
const getHeight    = () => Math.max( Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) );
const calcSlowdown = () => 1.4 * getWidth() / getHeight() + 0.6;


function Clouds() {

	const [ slowdown, setSlowdown ] = useState( calcSlowdown() );

	window.addEventListener( "resize", () => setSlowdown( calcSlowdown() ) );

	return (
	
		<div className="clouds">

			{ randints(0,2,20).map( x => clouds[x]( rand()*1000, slowdown ) ) }

		</div>

	); 
}

export default Clouds;
