import './App.css';
import Top from "./Top.js";
import Stars from "./Stars.js";
import Clouds from "./Clouds.js";
import { ReactComponent as Hills } from './hills.svg';


function FamilyTree() {

	return (
		<div className="family-tree">
	               
            <Top />
            
            <div></div>

            <Hills />
            <Stars />
            <Clouds />
            
	    </div>
	);
}

export default FamilyTree;
