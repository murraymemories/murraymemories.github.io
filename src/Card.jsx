

function Card( props ) {

	return (
		<div className="card">
			
			<img src={ props.imgsrc } alt="memory" width="100" height="100" />
			<p> { props.text } </p>

		</div>
	);
}

export default Card;
