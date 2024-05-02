import React, { useContext } from 'react'
import { fruitsContext } from '../../context/FruitsProvider'
import Fruit from '../Fruit/Fruit';

function FruitsList() {
	const {fruitsList} = useContext(fruitsContext);
  return (
	<div>
		<ul>
			{fruitsList.map((fruit, index)=>{
				return <Fruit fruitProp={fruit} key={fruit.id}/>
			})}
		</ul>
	</div>
  )
}

export default FruitsList