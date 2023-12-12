
import React from 'react'
import './About.css'

function About() {
  return (
    <div className='About_content'>

       

        {/* Next div */}

        <div className='about_img'>

            <img src='https://rowadel-3alam.com/wp-content/themes/el-3alamia/images/resource/about-1.webp' />

        </div>
        <div className='about_info'>
            <h1>شركة فيوتشر  لنقل الأثاث</h1>
            <h3>
            تنفرد وتتميز شركة فيوتشر  بتقديم جميع الخدمات الازمة لكل الافراد والمؤسسات والشركات قسم خاص للفلل والقصور
            </h3>

            <ul>
                <li>فك وتركيب وتغليف وتخزين العفش والاثاث</li>
                
                <li>تغليف العفش والاثاث</li>
                <li>نقل العفش والاثاث</li>
                <li>فيوتشر  فى خدمتكم دائماً.</li>
            </ul>
        </div>

    </div>
  )
}

export default About