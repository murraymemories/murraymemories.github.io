

export default function DetailCard( props ) {

    return (

        <div className="detail-card">
            <img alt="detail" src={ props.src } />
            <p> { props.text } </p>
        </div>

    );
}