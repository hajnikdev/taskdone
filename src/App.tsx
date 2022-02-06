import React from 'react';
import './App.scss';

// Reusable components
import InputField from './components/InputField';

const App: React.FC = () => {
	return (
		<>
			<header>
				<h1>Task Done</h1>
			</header>
			<main className='taskdone'>
				<InputField />
			</main>
		</>
	);
};

export default App;
