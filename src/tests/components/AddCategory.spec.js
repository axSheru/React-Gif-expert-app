import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en componente AddCategory.', () => {

    let wrapper;
    const setCategories = () => {};

    beforeEach(() => {
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('debe de hacer match con el snapshot.', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de cambiar la caja de text.', () => {

        const input = wrapper.find( 'input' );
        const value = 'Hola mundo';

        input.simulate( 'change', { target: { value } });

        expect( wrapper.find( 'p' ).text().trim() ).toBe( value );

    });

});