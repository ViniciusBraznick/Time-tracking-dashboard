import React, { useContext } from 'react';
import {card_data} from '../../data.js';

import optionIcon from '../../assets/icon-ellipsis.svg';
import './style.scss';
import { UserContext } from '../../context.js';

export default function Cards() {
	const [rangeTime, setRangeTime] = useContext(UserContext);

	return(
		<div className="cards-container">
			{card_data.map(card => {
					return(
						<section>
							<div className="card-content">
								<div className="card-header">
									<span>{card.title}</span>
									<img src={optionIcon} alt="options" width="20px" height="5px"/>
								</div>
								<div className="card-hours">
									<h3>{card.timeframes[rangeTime].current}{card.timeframes[rangeTime].current > 1 ? "hrs" : "hr"}</h3>
									<div className="card-hours__range">
										<p>Last Week - {card.timeframes[rangeTime].previous}{card.timeframes[rangeTime].previous > 1 ? "hrs" : "hr"}</p>
									</div>
								</div>
							</div>
						</section>
					)
				})
			}
		</div>
	)
}