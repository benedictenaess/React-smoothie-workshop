import React from 'react';
import smoothieImg from '../assets/images/smoothie.jpg';
import styles from './MainPage.module.css';

function MainPage() {
  return (
	<div className={styles.home_content_container}>
		<section className={styles.intro_container}>
			<h1>Welcome to the imaginary smoothie bar</h1>
			<p>
				Welcome to "Imaginary Smoothie Bar," where creativity meets
				refreshment! Dive into a world of flavorful blends crafted from the
				freshest fruits and wholesome ingredients. Our menu boasts a variety
				of imaginative concoctions, from classic favorites to unique
				combinations that will tantalize your taste buds. Join us at
				"Imaginary Smoothie Bar" and embark on a flavorful journey that
				celebrates the endless possibilities of nature's bounty!
			</p>
		</section>
		<section className={styles.home_image_container}>
			<img className={styles.smoothie_image} src={smoothieImg} alt="Smoothie img" />
		</section>
	</div>
  )
}

export default MainPage