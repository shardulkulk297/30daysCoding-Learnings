import React from 'react'
import { useReducer } from 'react';
const initialState = {
    data: [],
    loading: true,
    error: null,
}

function reducer(state, action){

    console.log(state, action);

    switch(action.type){
        case 'FETCH_DATA_START':
            return {...state, loading:true};
        case 'FETCH_DATA_SUCCESS':
            return {...state, loading: false, error: null, data: action.payload}
        case 'FETCH_DATA_FAILURE':
            return {...state, loading: false, error: action.payload}
        }   

}
const FetchData = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    

    const fetchData = async ()=>{
        dispatch({type: 'FETCH_DATA_START'});

        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            dispatch({type: 'FETCH_DATA_SUCCESS', payload : data})
            // console.log(data);
        }

        catch(error)
        {
            dispatch({type: 'FETCH_DATA_FAILURE', payload: error.message})
            

        }
    }   
  return (
    <div>

        <button onClick={fetchData}>Fetch Data</button>
      
        {
            state.loading && <p>Loading...</p>
        }
        {
            state.error && <p>ERROR: {state.error}</p>
        }

        <ul>
            {state.data.map((item)=>{
                return (
                <li key={item.id}>

                    {item.title}

                </li>
            )})}
        </ul>
    </div>
  )
}

export default FetchData


