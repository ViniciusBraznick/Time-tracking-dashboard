import Cards from "../Cards/index";
import UserProfile from "../UserProfile";
import './style.scss';


export default function Container() {
	return(
			<main className="d-flex">
				<UserProfile />
				<Cards />
			</main>
	)
}