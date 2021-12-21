import './App.css';
import Top from "./Top.js";
import Stars from "./Stars.js";
import Clouds from "./Clouds.js";
import { ReactComponent as Hills } from './hills.svg';
import { ReactComponent as Tree } from './family_tree.svg';


function FamilyTree() {

	return (
		<div className="family-tree">
	               
            <Top />
            
            <div id="tree-holder"> <Tree /> <p> Rotate your screen for a better look! </p> </div>

            <Hills />
            <Stars />
            <Clouds />
            
	    </div>
	);
}

export default FamilyTree;
