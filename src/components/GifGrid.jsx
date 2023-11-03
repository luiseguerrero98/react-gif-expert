import { GifGridItems } from "./GifGridItems";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { useState } from "react";

export const GifGrid = ({category}) => {
    const [offset, setOffset] = useState(1);
    const {images, isLoading} = useFetchGifs(category,offset);

    const onSetOffset = () => {
        setOffset(offset + 10);
    }

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2> Cargando... </h2>)
            }
            <div className="card-grid">
                {images.map((image)=>(
                    <GifGridItems 
                        key={image.id}
                        { ...image} />
                ))}
            </div>
            <button onClick={onSetOffset}>Cargar</button>
        </>
    )

};