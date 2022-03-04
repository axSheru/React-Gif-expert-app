import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Star Wars', 'Horizon Forbidden West', 'God of War' ]);

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
                    categories.map( category => {
                        return <li key={ category }>{ category }</li>;
                    })
                }
            </ol>
        </>
    );

};

export default GifExpertApp;