import React from 'react';
import { Link } from 'react-router-dom';
import {useEffect , useState} from 'react';

import '../styles/navbar.css';

const NaveBar = (props) => {
    const [searchItem , setSearchItem] = useState("123");
    useEffect(()=>{
        
    },[searchItem])
    return (
        <div className='container nvr sticky'>
            <div class="nav-item active ">
                <div class="input-group mb-3  ">
                    <div className='home'> <Link to='/'>
                        <button className='btn btn-link'><span className='back'></span></button>
                    </Link></div>
                    <input type="text" class="form-control" placeholder="Search" style={{ borderRadius: '0.5rem' }} onChange={(e)=>setSearchItem(e.target.value)} />
                    <div class="input-group-append">
                        <button class="btn btn-default" type="submit">search</button>
                    </div>
                </div>
            </div>
            <div className='lnks' >
                <ul class="nav justify-content-end ">
                    <li class="">
                        <Link to='/cart' className='nav-link'>
                            <div >
                                <span className='cartIcon'></span>
                                <p style={{ fontSize: '10px', fontWeight: 'bold' }}>My Cart</p>
                            </div>

                        </Link>
                    </li>
                    <li class="">
                        <Link to='/myaccount' className='nav-link'>
                            <span className='accountIcon'></span>
                            <p style={{ fontSize: '10px', fontWeight: 'bold' }}>My Account</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default NaveBar;
