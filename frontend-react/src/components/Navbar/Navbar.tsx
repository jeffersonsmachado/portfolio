import Avatar from "../Avatar/Avatar";
import { Container, Navlink } from "./style";

function Navbar() {
	return (
		<>
			<Container>
				<div className="avatar">
					<Avatar />
				</div>
				<div className="links">
					<Navlink href="">NavLink</Navlink>
					<Navlink href="">NavLink</Navlink>
					<Navlink href="">NavLink</Navlink>
					<Navlink href="">NavLink</Navlink>
					<Navlink href="">NavLink</Navlink>
					<Navlink href="">NavLink</Navlink>
				</div>
			</Container>
		</>
	);
}

export default Navbar;
