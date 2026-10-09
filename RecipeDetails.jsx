import { useEffect, useState } from "react";
import { useParams } from "react-router";

function RecipeDetails(){
    const {id} = useParams()
    console.log(id)
    const [data, setData] = useState([])
    useEffect(()=>{
        async function fetchData(){
        const response = await fetch(`https://dummyjson.com/recipes/${id}`)
        const item = await response.json()
        console.log(item)
        setData(item)
        }   
        fetchData()
    }, [])
    // console.log(data)
    return(
        <h1>
            {data.name} : {data.id}
        </h1>
    )   
}
export default RecipeDetails;