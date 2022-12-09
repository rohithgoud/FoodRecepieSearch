import React, {useState} from 'react';
import './App.css';
import Product from './Product';

function App() {
 
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);
  
  const YOUR_APP_ID ="3e5d31b1";
  const YOUR_APP_KEY =process.env.REACT_APP_API_KEY;

  const submitHandler = (e)=>{
    e.preventDefault();
     fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=9&calories=591-722&health=alcohol-free`)
     .then(response=>response.json())
     .then(data => setData(data.hits))
  }
  return (
    <div className="App">
      <center><h1>Food Recipe App</h1></center><br/>
      <form onSubmit={submitHandler}>
        <input type="text" className="input-search" placeholder="Search Food Recipe" value={search} onChange={(e)=> setSearch(e.target.value)} />
        <input type="submit" className="btn-primary" value="search" />
      </form>
      <div>
       {data.length>1?<Product  data= {data}/>:<p className="text-p">Search for Recipies</p>}
    </div>   
    </div>
  );
}

export default App;
