
import { useState } from "react";
import { Fetch } from "./components/index";
import { Search } from "./components/index";
import './App.css';

function App() {
  const [showSearch, setShowSearch] =
  useState(true);
  return (
    <div className="App">

<img className="banner" src="https://lh3.googleusercontent.com/proxy/dz85bDwoLqKy2hWEaFgCAexJJkI4OOdkVS5qu6B4vn73qdahO8E0BMuKrWMz1VCXv7yq3JfqAhDCJBjp9H4C_p2ww7Wj9VSvr8lsVu8MrJLTQ1CaDA5AUeUrx-9hpLM2Y3aYZQHxXBifqKeIAym5=w1200-h630-p-k-no-nu" alt="ghiblibanner" />


<div className="buttonContainer">

<button
              className="custom-btn btn-4"
              onClick={() => setShowSearch(true)}
            >

        📜 GALLERY

        </button>

        <button
              className="custom-btn btn-4"
              onClick={() => setShowSearch(false)}
            >
        
        🔍 SEARCH

        </button>

        </div>

        <div>
        {showSearch ? (
          <Fetch />
        ) : (
          <Search />
        )}
      </div>


      
      
    </div>
  );
}

export default App;
