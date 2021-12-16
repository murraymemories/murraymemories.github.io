import { range, rand, randText } from "./utility.jsx";
import { useState, useEffect } from 'react';
import MemoryImg from "./MemoryImg.jsx";
import DetailCard from "./DetailCard.jsx";
import AddPhoto from "./AddPhoto.jsx";


function MemoryList() {

	const dogUrl = "https://dog.ceo/api/breeds/image/random";

	const [ srcs     , setSrcs      ] = useState( [] );
	const [ detailObj, setDetailObj ] = useState( {} );

	useEffect( () => { ( async () => {

		const responses = await Promise.all( range(20).map( x => fetch(dogUrl) ) );
		const messages  = await Promise.all( responses.map( r => r.json().then( j => j.message ) ) );
		setSrcs( messages );

	} )(); }, [] );


    return (

    	<ul className="memory-list"> 
    		
    		{ srcs.length
    		? srcs.map( s => <MemoryImg key={ rand() } text={ randText(40) } src={ s } detailCallback={ setDetailObj } /> )
    		: <li className="loading"> Loading... </li> }
    		<AddPhoto onClick={ () => {} } />
    		<li></li>

    		{/*<DetailCard text={ detailObj.text } src={ detailObj.src } />*/}
    	</ul>

    );
}

export default MemoryList;
