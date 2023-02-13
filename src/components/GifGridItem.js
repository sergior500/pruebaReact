import React from 'react'

export const GifGridItem = ({id,title,url}) => {
  return (
//     <div className="card"> 
//         <img src= {img.url} alt ={img.titlek}>
//             </img>
//             <p>{img.title}</p>
//     </div>
//   )
        <div className="card"> 
        <img src= {url} alt ={title} >
            </img>
            <p>{title}</p>
        </div>
    )
}
