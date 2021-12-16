import { ReactComponent as Cloud1 } from './cloud1.svg';
import { ReactComponent as Cloud2 } from './cloud2.svg';
import { ReactComponent as Cloud3 } from './cloud3.svg';
import { rand, randints } from './utility.jsx';

const width    = Math.max( Math.max(document.documentElement.clientWidth  || 0, window.innerWidth  || 0) );
const height   = Math.max( Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) );
const aspect   = width / height;
const slowdown = 1.4 * aspect + 0.6;

const randDur   = x => `${ ( 20 + 15*(x%1) ) * slowdown }s`;

const randAnim  = x => { return { animationDelay    : `-${x}s`,
			                      animationDuration : randDur(x) }; };

const clouds = [ k => <Cloud1 key={k} style={ randAnim(k) } className="cloud" />,
                 k => <Cloud2 key={k} style={ randAnim(k) } className="cloud" />,
                 k => <Cloud3 key={k} style={ randAnim(k) } className="cloud" /> ];

function Clouds() {

	return (
	
		<div className="clouds">

			{ randints(0,2,20).map( x => clouds[x](rand()*1000) ) }

		</div>

	); 
}

export default Clouds;
