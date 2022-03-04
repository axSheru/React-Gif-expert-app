import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Star Wars' ]);

    /* const handleAdd = () => {
        setCategories( cats => [ ...cats, 'Demon Slayer' ] );
    }; */

    return (
        <>
            <h2>Gif expert app</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => 
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    )
                }
            </ol>
        </>
    );

};

export default GifExpertApp;