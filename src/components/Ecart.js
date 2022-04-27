import React, {useState} from "react";
import list from "../data";
import Card from "../components/Card";
import "../styles/ecart.css";


const Ecart = ({ handleClick }) => {

  const[filter, setFilter] = useState("");

  const searchText = (e) =>{
    setFilter(e.target.value);
  }

  let dataSearch = list.filter(item =>{
    return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  })

  return (

    <>

    <div className="searchBar">

    <div className="search-box">
        <img src="/Img/Vector (1).png" alt="icon" />
        <input type="text" placeholder="Search.." value= {filter} onChange={searchText.bind(this)}/>
        <span>
          <span> | </span>
          
          <img src="/Img/Vector (3).png" alt="icon" />
        </span>
      </div>
      </div>

    <section>


      {dataSearch.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>

    </>
  );
};

export default Ecart;