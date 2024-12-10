import React, { useEffect } from 'react'
import { useRef } from 'react';
const useRefDOM = () => {

  const inputEl = useRef(null);

  const handleFocus = ()=>{
    inputEl.current.style.backgroundColor = "black";
  }

  const handleBlur = ()=>{
    inputEl.current.style.backgroundColor = "red";
  }
  useEffect(()=>{
    inputEl.current.focus();
  }, [])
  return (
    <div>
      <input type="text" ref={inputEl} onFocus={handleFocus} onBlur={handleBlur}/>
    </div>
  )
}

export default useRefDOM
