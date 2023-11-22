const jwt = require('jsonwebtoken');
require('dotenv').config();

const payload = {
    firstName: 'Anthony',
    lastName: 'Lovern'
};

const secretKey = process.env.SUPER_SECRET_API_KEY;

const createToken = () => {
    const token = jwt.sign(payload, secretKey);
    return token;
}

let token = createToken()
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBbnRob255IiwibGFzdE5hbWUiOiJMb3Zlcm4iLCJpYXQiOjE3MDA2NzY1NDV9.d2D4c-piQkO58rF2Mc9IETq185z8VKoQsaHDUdJy16E
token = 'thataintit'
const verifyToken = (token) => {
    const verified = jwt.verify(token, secretKey, () => {
        console.log('inside cb func')
    })
    return verified
};

console.log(verifyToken(token, secretKey))