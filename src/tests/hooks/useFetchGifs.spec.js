import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs.', () => {

    test('debe de retornar el estado inicial.', () => {

        const { result } = renderHook( () => useFetchGifs( 'Darth Maul' ));
        const { data, loading } = result.current;

        expect( data.length ).toBe( 0 );
        expect( loading ).toBeTruthy();

    });

});