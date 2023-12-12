
import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
  return (
    <div className='Footer'>

    <div className='footer_content'>
        <div className='company_name'>
            <h5>© 2023 Company, Inc</h5>
        </div>

        {/*  */}

        <div className='company_logo'>

        </div>

        {/*  */}

        <div className='website_sections'>

        <div className="links">
        <Link to="/">الرئيسيه</Link>
        <Link to="/about">عن شركتنا</Link>
        <Link to="/contact">اتصل بنا</Link>
        <Link to='/services'>خدماتنا</Link>
      </div>

        </div>

        <div className='social_icon'>
          <div className='facebook_icon'>
            <FacebookIcon />
            
          </div>

          <div className='whats_icon'>
            
            <WhatsAppIcon />
           
          </div>

          <div className='insta_icon'>
            
            <InstagramIcon />
          </div>
          
        </div>

        <Link className='link' to='https://www.facebook.com/profile.php?id=100015927995666' > Prepared by omar sabry </Link>

    </div>
     

</div>
  )
}

export default Footer