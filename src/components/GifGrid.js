import React from 'react'

export const GifGrid = ({ category }) => {

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=The+mandalorian&limit=10&api_key=u1775mXvH3OtSHfVaM2EIIfeO4XCxjp9';
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            };
        });

        console.log(gifs);
    };

    getGifs();

    return (
        <div>
            <h3>{ category }</h3>
        </div>
    )
}
