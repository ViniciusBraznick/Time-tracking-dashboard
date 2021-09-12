import Cards from "../Cards/index";
import UserProfile from "../UserProfile";
import './style.scss';

export default function Container() {
	return(
		<main>
			<UserProfile />
			<Cards />
		</main>
	)
}