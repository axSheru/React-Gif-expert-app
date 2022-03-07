import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";

describe('Pruebas en el componente GifGrid.', () => {

    let wrapper;
    const category = 'Netflix';

    beforeEach(() => {
        wrapper = shallow( <GifGrid category={ category } /> );
    });

    test('debe de hacer match con el snapshot.', () => {

        expect( wrapper ).toMatchSnapshot();

    });

});