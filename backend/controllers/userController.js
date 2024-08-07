const expressAsyncHandler = require('express-async-handler');

const registerUser = expressAsyncHandler    (async (req, res) => {
    res.send('register')
})

const loginUser = expressAsyncHandler    (async (req, res) => { 
    res.send('login Success')
})

module.exports = {registerUser, loginUser} 