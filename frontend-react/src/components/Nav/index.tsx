import Avatar from '../Avatar';
import { Navbar, Navlink } from './style'

function Nav() {
    return (
        <>
            <Navbar>
                <div className="">
                    <Avatar />
                </div>
                <div className="">
                    <Navlink href=''>NavLink</Navlink>
                    <Navlink href=''>NavLink</Navlink>
                    <Navlink href=''>NavLink</Navlink>
                    <Navlink href=''>NavLink</Navlink>
                    <Navlink href=''>NavLink</Navlink>
                    <Navlink href=''>NavLink</Navlink>
                </div>
            </Navbar>
        </>
    );
}

export default Nav;