import React from 'react';

import optionIcon from '../../assets/icon-ellipsis.svg';
import './style.scss';

export default function Cards() {
	return(
		<div className="cards-container">
			
			<section>
				<div className="card-content">
					<div className="card-header">
						<span>Work</span>
						<img src={optionIcon} alt="options" width="20px" height="5px"/>
					</div>
					<div className="card-hours">
						<h3>32Hrs</h3>
						<div className="card-hours__range">
							<p>Last Week - 5hrs</p>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="card-content">
					<div className="card-header">
						<span>Work</span>
						<img src={optionIcon} alt="options" width="20px" height="5px"/>
					</div>
					<div className="card-hours">
						<h3>32Hrs</h3>
						<div className="card-hours__range">
							<p>Last Week - 5hrs</p>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="card-content">
					<div className="card-header">
						<span>Work</span>
						<img src={optionIcon} alt="options" width="20px" height="5px"/>
					</div>
					<div className="card-hours">
						<h3>32Hrs</h3>
						<div className="card-hours__range">
							<p>Last Week - 5hrs</p>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="card-content">
					<div className="card-header">
						<span>Work</span>
						<img src={optionIcon} alt="options" width="20px" height="5px"/>
					</div>
					<div className="card-hours">
						<h3>32Hrs</h3>
						<div className="card-hours__range">
							<p>Last Week - 5hrs</p>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="card-content">
					<div className="card-header">
						<span>Work</span>
						<img src={optionIcon} alt="options" width="20px" height="5px"/>
					</div>
					<div className="card-hours">
						<h3>32Hrs</h3>
						<div className="card-hours__range">
							<p>Last Week - 5hrs</p>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="card-content">
					<div className="card-header">
						<span>Work</span>
						<img src={optionIcon} alt="options" width="20px" height="5px"/>
					</div>
					<div className="card-hours">
						<h3>32Hrs</h3>
						<div className="card-hours__range">
							<p>Last Week - 5hrs</p>
						</div>
					</div>
				</div>
			</section>

		</div>
	)
}