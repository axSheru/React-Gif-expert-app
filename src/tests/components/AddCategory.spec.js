import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en componente AddCategory.', () => {

    let wrapper;
    const setCategories = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
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

    test('no debe de postear la información con submit si no hay valor de categoría.', () => {

        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    });

});