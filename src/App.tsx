import './App.css';

function App() {
  return (
    <>
      <div
        className="
      bg-indigo-400 text-start pl-5 py-[100px] box-border h-[300px] rounded-xl text-5xl mb-4
      "
      >
        PhoneBook Application
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button 
            className="px-4 py-1.5 border-2 border-green-500 text-xl rounded-lg
          text-green-500 hover:bg-green-500 hover:text-white transition duration-300"
          >
            All

          </button>

          <button 
            className="px-4 py-1.5 border-2 border-green-500 text-xl rounded-lg ml-1
              text-green-500 hover:bg-green-500 hover:text-white transition duration-300"
            >
            Favorite

          </button>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border-2 rounded-lg focus:outline-non focus:border-gray-600"
          />
          <button
            className="px-4 py-1.5 border-2 border-green-500
        hover:bg-green-500 rounded-lg text-green-500 hover:text-white  text-xl transition duration-300
        "
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
