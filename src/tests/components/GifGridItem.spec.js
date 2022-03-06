import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en componente GifGridItem.', () => {
    
    let wrapper;
    const title = 'Soy un título';
    const url = 'https://localhost:8080';

    beforeEach(() => {
        wrapper = shallow( <GifGridItem title={ title } url={ url } /> );
    });

    test('debe de hacer match con el snapshot.', () => {

        expect( wrapper ).toMatchSnapshot();

    });

});