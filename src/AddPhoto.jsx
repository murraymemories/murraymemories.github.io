import { useRef } from "react";
import { addMemory } from "./firebase.jsx";


export default function AddPhoto( props ) {

    const inputRef = useRef( null );
    
    return (
        <li className="add-photo">
            
            <button className="add-photo-button"
                onClick= { () => inputRef.current.click() }
                onChange={ props.callbackMaker( inputRef ) }>

                <svg viewBox="0 0 1 1">
                    <path d="m0.2,0.5 l0.6,0.0 m-0.3,-0.3 l0.0,0.6" />
                    <circle cx="0.5" cy="0.5" r="0.5" />
                </svg>
            
                <input ref={ inputRef } type="file"
                       id="avatar" name="avatar"
                       accept="image/png, image/jpeg" />
            
                <p> Add a Photo </p>
                
            </button>
        </li>
    );
}
