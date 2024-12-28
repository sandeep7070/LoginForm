import React from 'react'

 const SubmitBt = function () {

    function handleLogin() {
        alert("You are loging !!!!");
      }
    //   console.log("handleLogin", SubmitBt)
  return (
    <div>
        <button 
              onClick={handleLogin}
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
    </div>
  )
}

export default  SubmitBt