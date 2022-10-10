import './App.css';
import Game from './components/Game';
import Title from './components/Title';

function App() {
	return (
		<div className="App">
			<Title />
			{/* <Game word={"Paneer Tikka Masala".toUpperCase()} /> */}
			<Game word={"PANEER".toUpperCase()} />
		</div>
	);
}

export default App;
