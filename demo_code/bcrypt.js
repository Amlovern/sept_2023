const bcrypt = require('bcryptjs');

const hashPass = (password) => {
    const hash = bcrypt.hashSync(password, 12)
    return hash
}
let password = 'password123'
let hashedPass = hashPass(password)
// $2a$12$Ady5VEGkNSpCVbuQHONKge0ax7rb9LhyamCowiLi2cBXS.yi3BpHO
//  \_/\_/\_____________________/\_____________________________/
//  /   |         |                           |
//algo cost     salt                        hash
password = 'notit'
const testPass = (password, hash) => {
    const isPass = bcrypt.compareSync(password, hash)
    console.log(isPass)
}

testPass(password, hashedPass)