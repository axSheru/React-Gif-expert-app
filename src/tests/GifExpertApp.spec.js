import { shallow } from "enzyme";
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en el componente GifExpertApp.', () => {

    let wrapper;

    beforeEach( () => {
        wrapper = shallow( <GifExpertApp /> );
    });

    test('debe de hacer match con el snapshot.', () => {

        expect( wrapper ).toMatchSnapshot();

    });

});