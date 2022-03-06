import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs fetch.', () => {

    test('debe de traer 10 elementos al enviar una categoría.', async() => {

        const gifs = await getGifs( 'Mandalorian' );

        expect( gifs.length ).toBe( 10 );

    });

});