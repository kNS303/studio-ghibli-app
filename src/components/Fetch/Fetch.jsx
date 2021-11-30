import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Fetch/Fetch.css"

const Fetch = () => {
  const BASEURL = "https://ghibliapi.herokuapp.com";
  const ITEMSURL = "/films";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios(BASEURL + ITEMSURL).then(
      (res) => {
        setItems(res.data);
        setIsLoaded(true);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div><img src="https://i.pinimg.com/originals/9d/d1/a0/9dd1a0c90caa865e3718947e2b91d35e.gif" alt="Totoro" /></div>;
  } else {
    return (
      <div className="listContainer">
      <ul className="ul" >
        {items.map((item) => (
          
          <li className="list" key={item.id}>
            <div className="text">"{item.title}" </div>
            <div className="text">{item.original_title} </div> 
            <div className="text"> {item.director} </div>
             
            <img className="imgFilm" src={item.image} alt={item.title} />
            
          </li>
          
        ))}
      </ul>
      </div>
    );
  }
};

export default Fetch;
