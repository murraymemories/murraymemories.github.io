import './App.css';
import { useState, useEffect } from 'react';
import Top from './Top.js';
import Clouds from './Clouds.js';
import MemoryList from './MemoryList.jsx';
import AddPhoto from "./AddPhoto.jsx";
import { getSrcs, addMemory } from "./firebase.jsx"


function Memories() {

    const [ srcs, setSrcs ] = useState( [] );

    useEffect( () => ( async () => setSrcs( await getSrcs() ) )(), [] );

    const callbackMaker = inputRef => () => addMemory( inputRef, srcs, setSrcs );
    
    return (
        <div className="Memories">
        
            <Clouds />
            <Top />
            
            <MemoryList srcs={ srcs } />
            <AddPhoto callbackMaker={ callbackMaker } />

        </div>
    );
}

export default Memories;
