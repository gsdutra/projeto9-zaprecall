import React from 'react';
import BoasVindas from './BoasVindas.js';
import TelaJogo from './TelaJogo.js';
function App() {

	const [telaBoasVindas, setBV] = React.useState(true);

	function exitBoasVindas(){
		setBV(false);
	}

	return (
		<>
			<BoasVindas func={exitBoasVindas} telaBV={telaBoasVindas}/>
			<TelaJogo telaBV={telaBoasVindas}/>
		</>
	);
}

export default App;
