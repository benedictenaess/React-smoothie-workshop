import React from 'react';
import styles from './Smoothie.module.css';

function Smoothie({smoothie}) {
  return (
	<div className={styles.smoothie_container}>
		<div className={styles.image_container}>
			<img src={`/${smoothie.name.replace(/\s/g, '_')}.jpg`} alt={`${smoothie.name} smoothie image`} />
		</div>
		<div className={styles.info_container}>
			<h2>{smoothie.name}</h2>
			<span className={styles.ingredients_container}>
				<strong>Ingredients: </strong>
				{smoothie.ingredients.map((ingredient, index)=>{
					return <span key={index}>{ingredient}</span>
				})}
			</span>
			<span>
				<strong>Price: </strong>
				{smoothie.price}
			</span>
		</div>
	</div>
  )
}

export default Smoothie