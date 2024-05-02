import React from 'react';
import SmoothieList from '../components/SmoothieList/SmoothieList';
import styles from './SmoothiePage.module.css';

function SmoothiePage() {
  return (
	<div className={styles.smoothiePage_main_container}>
    <SmoothieList/>
  </div>
  )
}

export default SmoothiePage