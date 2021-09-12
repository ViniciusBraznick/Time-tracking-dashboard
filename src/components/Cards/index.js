import React from 'react';
import {card_data} from '../../data.js';

import optionIcon from '../../assets/icon-ellipsis.svg';
import './style.scss';


export default function Cards() {
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
									<h3>{card.timeframes.daily.current}Hrs</h3>
									<div className="card-hours__range">
										<p>Last Week - {card.timeframes.daily.previous}hrs</p>
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