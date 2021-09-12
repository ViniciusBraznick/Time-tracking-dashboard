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
		<aside>
			<div className="user-data">
				<img src={userProfileImg} alt="User profile" width="72px"/>

				<span>Report for</span>
				<h1>Jeremy <br/> Robson</h1>
			</div>

			<div className="time-interval-options">
				<button onClick={e => handleClick(e, "daily")}>Daily</button>
				<button onClick={e => handleClick(e, "weekly")}>Weekly</button>
				<button onClick={e => handleClick(e, "monthly")}>Monthly</button>
			</div>
		</aside>
	)
}