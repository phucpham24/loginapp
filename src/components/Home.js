const Home = ()=>{
    return (
    

    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-600">Experience the best services and features tailored for you.</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-4xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">Fast Performance</h3>
          <p className="text-gray-600 mt-2">Optimized for speed and efficiency.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">User Friendly</h3>
          <p className="text-gray-600 mt-2">Easy to navigate and use for everyone.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">Secure & Reliable</h3>
          <p className="text-gray-600 mt-2">Built with security and reliability in mind.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-gray-600 mt-16 border-t">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
    )
}
export default Home