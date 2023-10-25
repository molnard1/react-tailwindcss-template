import React from "react";
import { createRoot } from 'react-dom/client';

export default function App() {
    return [
		<div className="m-auto bg-gray-600 text-black">Hello TailwindCSS + React!</div>	
	]
}

createRoot(document.getElementById("root")).render(<App />);
