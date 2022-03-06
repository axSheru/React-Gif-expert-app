import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en componente GifGridItem.', () => {
    
    let wrapper;

    beforeEach(() => {
        wrapper = shallow( <GifGridItem /> );
    });

    test('debe de hacer match con el snapshot.', () => {

        expect( wrapper ).toMatchSnapshot();

    });

});