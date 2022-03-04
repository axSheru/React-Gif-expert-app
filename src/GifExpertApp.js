import { useState } from "react";

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Star Wars', 'Horizon Forbidden West', 'God of War' ]);

    const handleAdd = () => {
        setCategories( cats => [ ...cats, 'Demon Slayer' ] );
    };

    return (
        <>
            <h2>Gif expert app</h2>
            <hr />
            <button onClick={ handleAdd }>Agregar</button>

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