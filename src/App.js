import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CodeReview from "./pages/CodeReview";

function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<CodeReview />} />
      </Routes>
    </Router>
  );
}

export default App;
