import { rand, randText } from "./utility.jsx";
import MemoryImg from "./MemoryImg.jsx";


function MemoryList( props ) {

    return (

    	<ul className="memory-list"> 
    		
    		{ props.srcs.length
    		? props.srcs.map( src => <MemoryImg key={ rand() } text={ randText(40) } src={ src } /> )
    		: <li> Loading... </li> }
    		<li></li>
    	</ul>

    );
}

export default MemoryList;
