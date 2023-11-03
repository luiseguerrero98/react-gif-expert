import { useState } from "react"
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
     

    const onAddCategory = (newCategory) => {
        const lowerCategories = categories.map((cat) => cat.toLowerCase());
        if(lowerCategories.includes(newCategory.toLowerCase())) return;
        setCategories([newCategory,...categories,]);
    };


    return (
        <>
            {/*Título*/}
            <h1>GifExpertApp</h1>

            {/*Input*/}
            <AddCategory 
                //setCategories={setCategories}
                onNewCategory = {onAddCategory}
            />


            {/*Listado de Gif*/}
            {categories.map(category => (
                <GifGrid key={category} category = {category}/>
            ))}
        </>
  )
}
