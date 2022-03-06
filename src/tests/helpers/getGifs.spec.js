import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs fetch.', () => {

    test('debe de traer 10 elementos al enviar una categoría.', async() => {

        const gifs = await getGifs( 'Mandalorian' );

        expect( gifs.length ).toBe( 10 );

    });

    test('debe de traer 0 elementos al no enviar una categoría.', async() => {

        const gifs = await getGifs( '' );

        expect( gifs.length ).toBe( 0 );

    });

});