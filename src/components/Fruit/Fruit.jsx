import React from 'react';
import styles from './Fruit.module.css';

function Fruit({fruitProp}) {
	const {calories, sugar, fat, carbohydrates, protein} = fruitProp.nutritions;
  return (
	<div className={styles.fruitData_container}>
		<h4>{fruitProp.name}</h4>
		<ul>
			<li>Sugar: {sugar}</li>
			<li>Fat: {fat}</li>
			<li>Calories: {calories}</li>
			<li>Carbohydrates: {carbohydrates}</li>
			<li>Protein: {protein}</li>
		</ul>
	</div>
  )
}

export default Fruit