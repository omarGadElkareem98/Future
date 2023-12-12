
import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='header_content'>

        <div className='company_phone'>
            <h3>إتصل بنا في أي وقت
            <Link to='tel:+0537134530'>
            +0537134530
                </Link>
            </h3>
            <Link to='tel:+0537134530'>
                    <PhoneIcon className='phonelogo' />
                </Link>
        </div>

        <div className='compant_time'>

<AccessTimeIcon />

<h3>Mon - Sat : 9am to 7pm</h3>
</div>
    </div>
  )
}

export default Header