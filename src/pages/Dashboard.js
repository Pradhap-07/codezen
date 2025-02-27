const Dashboard = () => {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">📊 CodeZen Dashboard</h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">🚀 Projects</h2>
            <p className="text-gray-600">Manage your coding projects efficiently.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">🤖 AI Code Review</h2>
            <p className="text-gray-600">Submit code and get AI-powered feedback.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">📜 Reports</h2>
            <p className="text-gray-600">View optimization reports and logs.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  