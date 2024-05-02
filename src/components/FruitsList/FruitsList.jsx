import React, { useContext } from 'react'
import { fruitsContext } from '../../context/FruitsProvider'
import Fruit from '../Fruit/Fruit';
import styles from './FruitsList.module.css';

function FruitsList() {
	const {fruitsList} = useContext(fruitsContext);
  return (
	<div className={styles.listContainer}>
		<ul className={styles.listItems}>
			{fruitsList.map((fruit, index)=>{
				return <Fruit fruitProp={fruit} key={fruit.id}/>
			})}
		</ul>
	</div>
  )
}

export default FruitsList