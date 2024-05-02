import React from 'react';
import FruitsList from '../components/FruitsList/FruitsList';
import styles from '../pages/NutritionPage.module.css';

function NutritionPage() {
  return (
	<div className={styles.nutrition_content_container}>
		<FruitsList/>
	</div>
  )
}

export default NutritionPage