import "./fruitList.css"
import { useState } from "react"

const FruitList = ()=>{
    const list = [
        { name: "banana",       color: "yellow",    price: 2 },
        { name: "cherry",       color: "red",       price: 3 },
        { name: "strawberry",   color: "red",       price: 4 },
    ]

    const [fruits, setFruits] = useState(list)

    const filterRedFruits  = () => {
        const newFruits = fruits.filter((fruit)=> fruit.color === "red")
        setFruits(newFruits)
    }

    const allFruits = () => {
        const newFruits = list
        setFruits(newFruits)
    }

    // const [total, setTotal] = useState(0)

    // const sumTotal = ()=>{
    //     const sum = .reduce((accum, curr) => accum + curr.price, 0)
    //     setTotal(sum)
    // }

    return (
        <div>
            {
                fruits.map((fruit, i)=>{
                    return (
                        <li key={i}>
                            {fruit.name} - R$: {fruit.price}
                        </li>
                        )
                    }
                )
            }

            <span>{sumTotal}</span>
            <button onClick={filterRedFruits}>Filtrar vermelhas</button>
            <button onClick={allFruits}>Todas</button>
        </div>
    )

}

export default FruitList

