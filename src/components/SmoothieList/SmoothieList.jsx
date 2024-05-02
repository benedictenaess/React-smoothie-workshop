import React, { useState } from 'react';
import smoothieData from '../../assets/data/fruitShakesData';
import Smoothie from '../Smoothie/Smoothie';
import styles from './SmoothieList.module.css';

function SmoothieList() {
	const [smoothieList, setSmoothieList] = useState(smoothieData);
	console.log(smoothieData);
  return (
	<div>
		<ul className={styles.shakes_main_container}>
			{smoothieList.map(smoothie=>{
				return <Smoothie smoothie={smoothie} key={smoothie.id}/>
			})}
		</ul>
	</div>
  )
}

export default SmoothieList