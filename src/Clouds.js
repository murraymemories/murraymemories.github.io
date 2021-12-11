import { ReactComponent as Cloud1 } from './cloud1.svg';
import { ReactComponent as Cloud2 } from './cloud2.svg';
import { ReactComponent as Cloud3 } from './cloud3.svg';

const rand      = Math.random;
const range     = n       => [...Array(n).keys()];
const randint   = (a,b)   => Math.floor( rand() * (b - a + 1) + a );
const randints  = (a,b,n) => range(n).map( x => randint(a,b) );
const randAnim  = x       => { return {animationDelay    : `-${x}s`,
									   animationDuration : `${20+15*(x%1)}s`}; };

const clouds = [ k => <Cloud1 key={k} style={randAnim(k)} className="cloud" />,
                 k => <Cloud2 key={k} style={randAnim(k)} className="cloud" />,
                 k => <Cloud3 key={k} style={randAnim(k)} className="cloud" /> ];

function Clouds() {

	return (
	
		<div className="clouds">

			{ randints(0,2,20).map( x => clouds[x](rand()*100) ) }

		</div>

	); 
}

export default Clouds;
