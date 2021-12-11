import './App.css';
import Top from "./Top.js";
import Stars from "./Stars.js";


function FamilyTree() {

	return (
		<div className="family-tree">
			
	    	<Stars />

			<div className="black-bg">
	               
	            <Top />
	            
	            <div style={{height: "1300vh"}}></div>

	        </div>
	    </div>
	);
}

export default FamilyTree;
