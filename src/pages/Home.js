import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleGetStarted = () => {
    navigate("/review"); // Redirects to code review page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to CodeZen 🚀</h1>
      <p className="text-xl">AI-powered Code Review & Optimization</p>
      <button 
        onClick={handleGetStarted} // Redirect to code review page
        className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;

  