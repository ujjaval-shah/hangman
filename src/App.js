import './App.css';
import Theme from './components/Theme';
import Title from './components/Title';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

function App() {
	return (
		<div className="App">
			<Title />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/theme/:theme/level/:level" element={<Theme />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
