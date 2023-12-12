
import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { Link } from 'react-router-dom';
import PhoneIcon from '@material-ui/icons/Phone';


function Static() {
  return (
    <div className='Static_content'>
            <div className='whatsIcon'>
            <Link to='https://wa.me/+0537134530'> <WhatsAppIcon className='iconSttic' />   </Link> 
            </div>
            <div className='phoneIcon'>
                <Link to='tel:+0537134530'>
                    <PhoneIcon className='phonelogoicon' />
                </Link>

            </div>
            </div>
  )
}

export default Static