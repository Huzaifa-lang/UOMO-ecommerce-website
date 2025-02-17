import React, { useEffect, useState } from 'react'
import '../HomeCss/InstagramHome.css'

import data from '../mainpage-InstagramData.js'

function InstagramHome() {
    const [displayData, setDisplayData] = useState(null)

    useEffect(()=> {
        const items = data.map((item, index)=> (
            <div className=" custom-6 custom-4 custom-3" key={index}>
                <div className="instagram-img">
                    <div className="instagram-wrapper">
                    <a href={`https://www.instagram.com`} target="_blank" rel="noopener noreferrer" className="instagram-link">

                        <img src={item.image} alt="" />
                        <div className="instagram-overlay">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20">
          <path
            fill="currentColor"
            d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h14c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2M9.984 15.523a5.54 5.54 0 0 0 5.538-5.539c0-.338-.043-.664-.103-.984H17v7.216a.69.69 0 0 1-.693.69H3.693a.69.69 0 0 1-.693-.69V9h1.549c-.061.32-.104.646-.104.984a5.54 5.54 0 0 0 5.539 5.539M6.523 9.984a3.461 3.461 0 1 1 6.922 0a3.461 3.461 0 0 1-6.922 0M16.307 6h-1.615A.694.694 0 0 1 14 5.308V3.691c0-.382.31-.691.691-.691h1.615c.384 0 .694.309.694.691v1.616c0 .381-.31.693-.693.693"
          />
        </svg>
                        </div>
                        </a>
                    </div>
                </div>
            </div>

        ))

        setDisplayData(items)


    },[])
  return (
    <div id='InstagramHome'>
        <h2 className='instagram-title'>@UOMO</h2>

        <div className="instagram-custom-row">
            {displayData}

            
        </div>

        {/* adada */}
    </div>
  )
}

export default InstagramHome