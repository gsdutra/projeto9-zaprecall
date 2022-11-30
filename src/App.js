import React from 'react';
import BoasVindas from './BoasVindas.js';

function App() {

	const [telaBoasVindas, setBV] = React.useState(true);

	function exitBoasVindas(){
		setBV(false);
	}

	return (
		<BoasVindas func={exitBoasVindas}/>
	);
}

export default App;
