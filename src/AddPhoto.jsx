

export default function AddPhoto( props ) {
    
    return (
        <li className="add-photo">
            <button className="add-photo-button" onClick={ props.onClick }>
                <svg viewBox="0 0 1 1">
                    <path d="m0.2,0.5 l0.6,0.0 m-0.3,-0.3 l0.0,0.6" />
                    <circle cx="0.5" cy="0.5" r="0.5" />
                </svg>
                <p> Add a Photo </p>
            </button>
        </li>
    );
}
