import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Operations from './pages/Operations';
import Schedule from './pages/Schedule';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/tools/:envId" element={<Tools />} />
				<Route path="/operations/:operationId" element={<Operations />} />
				<Route path="/schedule/:date/:time" element={<Schedule />} />
			</Routes>
		</>
	);
};

export default App;
