import React from 'react'
import './FaceRegconition.css'

const  FaceRegconition = ({imageUrl, box}) => {
  return (
    <div className='center'>
        <div className='absolute mt2'>
        <img id='inputimage' alt='img' src={imageUrl} width='500px' height='auto'/>
        <div className='bounding-box' style={{top: box.top_row, left: box.left_col, right: box.right_col, bottom: box.bottom_row}}></div>
      </div>
    </div>
  )
}

export default FaceRegconition;
