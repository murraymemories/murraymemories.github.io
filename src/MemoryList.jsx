import { range, rand } from "./utility.jsx";
import MemoryImg from "./MemoryImg.jsx";
import { useState, useEffect } from 'react';


function MemoryList() {

	const dogUrl = "https://dog.ceo/api/breeds/image/random";

	const [ srcs, setSrcs ] = useState( [] );

	useEffect(  () => { ( async () => {

		const responses = await Promise.all( range(20).map( x => fetch(dogUrl) ) );
		const messages  = await Promise.all( responses.map( r => r.json().then( j => j.message ) ) );
		setSrcs( messages );

	} )(); }, [] );


    return (

    	<ul className="memory-list"> 
    		{ srcs.length
    		? srcs.map( s => <MemoryImg key={ rand() } src={ s } /> )
    		: <li className="loading"> Loading... </li> }
    		<li></li>
    	</ul>

    );
}

export default MemoryList;
