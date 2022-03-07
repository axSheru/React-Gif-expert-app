import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock( '../../hooks/useFetchGifs' );

describe('Pruebas en el componente GifGrid.', () => {

    const category = 'Netflix';

    test('debe de hacer match con el snapshot.', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan imágenes con useFetchGifs.', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/algo.jpg',
            title: 'Cualquier cosa',
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow( <GifGrid category={ category } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'p' ).exists() ).toBeFalsy();
        expect( wrapper.find( 'GifGridItem' ).length ).toBe( gifs.length );

     });

});