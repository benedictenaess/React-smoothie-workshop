import React, { useEffect } from 'react'

function FruitsList() {

	const fetchFruits = async ()=>{
		try {
			const response = await fetch('http://localhost:4000/');
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log(error.message);
		}
	}

	useEffect(()=>{
		fetchFruits();
	},[])

  return (
	<div>FruitsList</div>
  )
}

export default FruitsList