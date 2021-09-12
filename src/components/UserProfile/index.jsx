import React, { useContext } from 'react';

import userProfileImg from '../../assets/image-jeremy.png';
import './style.scss';
import { UserContext } from '../../context';

export default function UserProfile() {
	const [rangeTime, setRangeTime] = useContext(UserContext);
	
	return(
		<aside>
			<div className="user-data">
				<img src={userProfileImg} alt="User profile" width="72px"/>

				<span>Report for</span>
				<h1>Jeremy <br/> Robson</h1>
			</div>

			<div className="time-interval-options">
				<button type="button" onClick={() => setRangeTime("daily")}>Daily</button>
				<button type="button" onClick={() => setRangeTime("weekly")}>Weekly</button>
				<button type="button" onClick={() => setRangeTime("monthly")}>Monthly</button>
			</div>
		</aside>
	)
}