import React from 'react';

import userProfileImg from '../../assets/image-jeremy.png';
import './style.scss';

export default function UserProfile() {
	return(
		<aside>
			<div className="user-data">
				<img src={userProfileImg} alt="User profile" width="72px"/>

				<span>Report for</span>
				<h1>Jeremy <br/> Robson</h1>
			</div>

			<div className="time-interval-options">
				<button type="button">Daily</button>
				<button type="button">Monthly</button>
				<button type="button">Weekly</button>
			</div>
		</aside>
	)
}