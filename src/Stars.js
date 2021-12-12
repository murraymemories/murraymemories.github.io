import { randfloats } from "./utility.jsx";

const starStyle = x => { return {left: `${x}%`, top: `${ 100*(x%1) }%`}; }

function Stars() {

	return (

        <div className="stars">

            { randfloats(0,100,100).map( x => <div className="star" style={ starStyle(x) } /> ) }

        </div>
    );
}

export default Stars;
