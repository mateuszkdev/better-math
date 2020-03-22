const better_maths = require('./better-maths.js')
const api = new better_maths()


const wynik = api.potega(-2, -5)

const result = api.repair_number(wynik)

console.log(result)
