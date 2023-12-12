
import './contact.css'
import React from 'react'

function Contact() {
  return (
    <div className='contact'>

        <h2>Contact us</h2>

        <div class="input-group mb-3">
  
  <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>








<div class="input-group">
  <span class="input-group-text">ارسل استفسارك</span>

  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>

        <div>
            <h2>
تحتاج لنقل الأثاث الخاص بك,
أو أي أعمال للصيانة</h2>

            <div className='contact_data'>
                <a href='https://wa.me/+0537134530'>اتصل الان</a>
                
            </div>

        </div>
    </div>
  )
}

export default Contact