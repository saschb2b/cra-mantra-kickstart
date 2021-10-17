const rewire = require("rewire")
const Pokemons = rewire("./Pokemons")
const styles = Pokemons.__get__("styles")
// @ponicode
describe("styles", () => {
    test("0", () => {
        let callFunction = () => {
            styles({ spacing: { unit: 0 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            styles({ spacing: { unit: 1 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            styles({ spacing: { unit: -5.48 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            styles({ spacing: { unit: -10 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            styles({ spacing: { unit: -1 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            styles(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
