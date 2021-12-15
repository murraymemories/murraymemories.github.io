

export default function MemoryImg( props ) {

	const onclick = () => props.detailCallback( { text: props.text, src: props.src } );

	return (
		<li> 
			<img src={ props.src } alt="memory" onClick={ onclick } />
		</li>
	);
}