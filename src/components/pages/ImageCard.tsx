
import { useState } from 'react'
import './imagecard.css'
import { CloseIcon } from '../../assets/icons'


function ImageCard({urls, alt_description, id, likes} :any) {
  const [showModal, setShowModal] = useState(false)
  

   const handleClick = () => {
    setShowModal(true)
   }

  return (
    <>
   <div className="image-card" onClick={handleClick}>
       <img src={urls.small} alt={alt_description} key={id}/>
   </div>
     <div className= {showModal ? `full-image active` : `full-image ` }>
            <div className="full-image-container">
              
            <button onClick={() => setShowModal(false) }> <CloseIcon /> </button>
            <img src={urls.full} alt={alt_description} key={id}/>
            <div className="image-info-container">
             <p>♡ <span>{likes}</span></p> 
            </div>
            </div>
     </div>
   </>

  )
}

export default ImageCard