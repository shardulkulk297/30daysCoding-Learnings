import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import datas from './datas.json';

function App() {
  const [nData, setnData] = useState(datas);

  const handleClick = ()=>{
    setnData([]);
  }

  const removeItem = (id) =>{

   setnData(nData.filter(item=>item.id!==id))

  }

  const handleUpdate = (id) =>{
    setnData(nData.map(items => {
      if(items.id === id)
      {
        return{name: "newName"}
      }
      else{
        return items
      }
    }))
  }
  // console.log(datas)
  return (
    <div>

      <ul>
        
          {
            nData.map(items=>

              <li key={items.id}>

                {items.name}
                <button onClick={()=>removeItem(items.id)}>Remove Item</button>
                <button onClick={()=> handleUpdate(items.id)}>Update</button>

              </li>

            )
          }
        
      </ul>

        <button onClick={handleClick}>Clear</button>


     
    </div>
  );
}

export default App;
