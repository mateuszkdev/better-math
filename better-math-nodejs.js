/**
 * @author Mateusz#4711 / Wszelkie prawa zastrzezone
 * @version 1.0.0
 * @description 
 * const better_math = require('./better-maths.js')
 * const api = new better_math()
 * api.repair_number(-20)
 * Wynik => (-20)
 */

module.exports = class better_math{

    /**
     * @param {number} a Napraw liczbę jeżeli jest ujemna.
     */
    repair_number(a){
        try{
        a = parseFloat(a)
        if(isNaN(a)) return console.error('Funckaj repair_number() wymaga podania liczby.')
        if(a < 0) return `(${a})`
        else return a
        }catch(e){
            console.error(e)
        }
    }

    /**
     * @param {number} liczba
     * @param {number} potega
     */
    potega(liczba, potega){
        try{
        liczba = parseFloat(liczba)
        potega = parseInt(potega)
        const wynik = Math.pow(liczba, potega)
        if(isNaN(wynik)) return console.error('Funkcja potega() wymaga podania liczb.')
        return wynik
        }catch(e){
            return console.error(e)
        }
    }
}
