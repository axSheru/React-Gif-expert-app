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

});