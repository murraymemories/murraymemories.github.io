import './App.css';
import Top from './Top.js';
import Clouds from './Clouds.js';
import { ReactComponent as Hills } from './hills.svg';

function App() {
    
    return (
        <div className="App">
        
            <Top />

            <div id="links">
                <a href="/memories"> Photo Album </a>
                <a href="/familytree"> Family Tree </a>
                <a href="/about"> About </a>
            </div>

            <Hills />
            <Clouds />

        </div>
    );
}

export default App;
