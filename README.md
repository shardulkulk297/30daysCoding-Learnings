1. useState
    1. While using the usestate, while creating a function if it doesn’t have any parameters then we can directly pass it in the onClick without specifying it as a function.
    2. If there are parameters then we need to specify the arrow function

   ``` <button onClick={handleClick}>Clear</button> ```

   ```  <button onClick={()=>removeItem(items.id)}>Remove Item</button> ```
   ```     <button onClick={()=> handleUpdate(items.id)}>Update</button> ```
	
