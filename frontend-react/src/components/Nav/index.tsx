import { Fragment } from 'react';
import './style.css';

function Nav () {
    return (
        <Fragment>
            <nav className='navbar'>
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                </ul>
            </nav>
        </Fragment>
    );
}
 
export default Nav;