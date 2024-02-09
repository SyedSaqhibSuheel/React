import React, { useState } from "react";

function App() {
    const[hello,setname]=useState("");
    const[beSubmit, afSubmit]=useState("");

    function handel(event){
       
        console.log(event.target.value);
        setname(event.target.value);

    }
    //it was printing as we type so we added this function after submitting we will get the name now
    function change(event){
    afSubmit(hello);

    event.preventDefault();
       
    }

  return (
   
    <div className="container">
      <h1>Hello {beSubmit}</h1>
      <form onSubmit={change}>
      <input onChange={handel}type="text" placeholder="What's your name?" value={hello}/>
      
      <button  type="submit">Submit</button>
      </form>
    </div>
   
  );
}

export default App;
