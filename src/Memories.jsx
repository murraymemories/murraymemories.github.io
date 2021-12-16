import './App.css';
import Top from './Top.js';
import Clouds from './Clouds.js';
import MemoryList from './MemoryList.jsx';
import { ReactComponent as Hills } from './hills.svg';

function Memories() {
    
    return (
        <div className="Memories">
        
            <Clouds />
            <Top />
            
            <MemoryList />

        </div>
    );
}

export default Memories;
