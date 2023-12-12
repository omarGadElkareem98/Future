
import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

function Order() {
  return (
    <div className='order'>
        <div className='order_content'>
            <div className='order_text'>
                <h2>
                    
تحتاج لنقل الأثاث الخاص بك,
أو أي أعمال للصيانة
                </h2>
            </div>
            {/* *** */}
            <div className='order_request'>
            <div className='link_whats'>
            <Link to='https://wa.me/+0537134530'> <WhatsAppIcon className='icon' />   </Link> 
            </div>
            <div className='link_phone'>
                <Link to='tel:+0537134530'>
                    <PhoneAndroidIcon className='phonelogo' />
                </Link>

            </div>
            </div>
        </div>

    </div>
  )
}

export default Order