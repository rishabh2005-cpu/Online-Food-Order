import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download'id='app-download'>
        <p>For Better Experiece Download <br /> Foodie App</p>
        <dir className='app-download-platforms'>
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
</dir>
    </div>
  )
}

export default AppDownload