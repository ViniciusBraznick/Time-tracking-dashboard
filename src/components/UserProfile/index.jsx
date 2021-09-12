import React, { useContext, useState } from 'react';

import userProfileImg from '../../assets/image-jeremy.png';
import './style.scss';
import { UserContext } from '../../context';

export default function UserProfile() {
	const [rangeTime, setRangeTime] = useContext(UserContext);

	function handleClick(event, rangeValue){
		setRangeTime(rangeValue)
		document.querySelectorAll("button").forEach(item => item.classList.remove("active"))
		event.target.classList.add("active")
	}
	
	return(
		<aside className="border-radius d-flex">
			<div className="user-data padding">
				<img src={userProfileImg} alt="User profile" width="72px" height="72px"/>

				<div className="user-name">
					<span>Report for</span>
					<h1>Jeremy Robson</h1>
				</div>
			</div>

			<div className="time-interval-options padding d-flex">
				<button onClick={e => handleClick(e, "daily")}>Daily</button>
				<button onClick={e => handleClick(e, "weekly")}>Weekly</button>
				<button onClick={e => handleClick(e, "monthly")}>Monthly</button>
			</div>
		</aside>
	)
}