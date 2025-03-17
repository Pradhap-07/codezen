import { useNavigate } from "react-router-dom";
import ParticlesComponent from "../components/particles";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      
      {/* Particle Background - Moved Outside Content */}
      <ParticlesComponent id="particles" />

      {/* Content Wrapper to Ensure Visibility */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to CodeZen 🚀</h1>
        <p className="text-xl max-w-xl">AI-powered Code Review & Optimization</p>

        <button
          onClick={() => navigate("/review")}
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;

