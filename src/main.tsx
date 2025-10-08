
// main.tsx: Entry point for the React app
// - Renders the App component into the root div in index.html

import { createRoot } from "react-dom/client"; // React 18+ root API
import App from "./App.tsx"; // Main App component
import "./index.css"; // Global styles

// Find the root div and render the App
createRoot(document.getElementById("root")!).render(<App />);
  