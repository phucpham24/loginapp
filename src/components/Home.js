const Home = ()=>{
    return (
    //     <>
    //        <div style={{
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   height: "100vh",
    //   background: "linear-gradient(to right, #3b82f6, #9333ea)",
    //   fontFamily: "Arial, sans-serif"
    // }}>
    //   <div style={{
    //     background: "white",
    //     padding: "20px",
    //     borderRadius: "10px",
    //     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    //     textAlign: "center"
    //   }}>
    //     <h2>Welcome Back</h2>
    //     <form>
    //       <input type="email" placeholder="Enter your email" required style={{
    //         width: "100%",
    //         padding: "10px",
    //         margin: "10px 0",
    //         border: "1px solid #ccc",
    //         borderRadius: "5px"
    //       }} />
    //       <input type="password" placeholder="Enter your password" required style={{
    //         width: "100%",
    //         padding: "10px",
    //         margin: "10px 0",
    //         border: "1px solid #ccc",
    //         borderRadius: "5px"
    //       }} />
    //       <button type="submit" style={{
    //         width: "100%",
    //         padding: "10px",
    //         backgroundColor: "#3b82f6",
    //         color: "white",
    //         border: "none",
    //         borderRadius: "5px",
    //         cursor: "pointer"
    //       }}>Login</button>
    //     </form>
    //     <p>Don't have an account? <a href="/">Sign up</a></p>
    //   </div>
    // </div></>

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