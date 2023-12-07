
import React from "react"
function GalleryMain(props){
  return(
  <div>
      {
      props.imageData.map(image=>{
        return(
          <div key={image.id} className="column">
            <img src={image.img} alt=""></img>
          </div>
        )
      })
    }
  </div>
  )
}
export default GalleryMain;