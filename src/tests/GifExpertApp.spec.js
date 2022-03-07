import { shallow } from "enzyme";
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en el componente GifExpertApp.', () => {

    test('debe de hacer match con el snapshot.', () => {

        const wrapper = shallow( <GifExpertApp /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar una lista de categorías.', () => {

        const categories = [ 'The mandalorian', 'Back to the future' ];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'GifGrid' ).length ).toBe( categories.length );



    });

});