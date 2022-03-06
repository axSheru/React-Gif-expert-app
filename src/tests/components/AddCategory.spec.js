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

});