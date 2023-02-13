import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp  = () => {

    const categorias = ['Honda', 'Kawasaki', 'Yamaha'];
    let [categories,setCategories] = useState(categorias);

  //   const addToList=()=>{
  //     categories.push("Suzuki");
  //     setCategories([...categories]);
  // }
  //   const deleteLast=()=>{
  //     categories.pop();
  //     setCategories([...categories]);
  //   }
  //   const deleteFirst=()=>{
  //     categories.shift();
  //     setCategories([...categories]);
  //   }
  
    return (
      <>
      <h2>GifApp</h2>
      <hr />
      <AddCategory setCategories={setCategories}/>
      <ol>
          { 
            categories.map((category)=>
            <GifGrid
              category = {category} 
              key = {category}/>
            )
          }
      </ol>

      {/* <button onClick={addToList}>annadir</button>
      <button onClick={deleteLast}>delete Last</button>
      <button onClick={deleteFirst}>delete First</button> */}
      </>
    )
}
