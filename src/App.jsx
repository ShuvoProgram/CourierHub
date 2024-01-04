import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import AnimatedCursor from 'react-animated-cursor';
import { useEffect, useState } from 'react';

function App() {
  const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);
  return (
    <>
    {mounted && (
				<AnimatedCursor
					innerSize={8}
					outerSize={35}
					innerScale={0}
					outerScale={1.5}
					outerAlpha={0}
					innerStyle={{
						backgroundColor: `var(--cursor-color)`,
					}}
					outerStyle={{
						border: `3px solid var(--cursor-color)`,
					}}
				/>
			)}
    <RouterProvider router={routes} />
    </>
  )
}

export default App;
