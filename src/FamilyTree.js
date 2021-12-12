import './App.css';
import Top from "./Top.js";
import Stars from "./Stars.js";
import { ReactComponent as Hills } from './hills.svg';


function FamilyTree() {

	return (
		<div className="family-tree">
	               
            <Top />
            
            <div></div>

            <Hills />
            
	    </div>
	);
}

export default FamilyTree;
