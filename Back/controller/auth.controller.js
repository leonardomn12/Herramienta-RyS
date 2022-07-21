const User = require('../model/auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = '1234';

exports.createUser = (req, res, next)=>{

    const newUser = {
        nombre: req.body.nombre,
        email: req.body.email,
        contrasena: bcrypt.hashSync(req.body.contrasena)
    }

    User.create (newUser, (err, user)=>{
        if (err && err.code == 11000) return res.status(409).send('Correo existente');

        if (err) return res.status(500).send('Server Error');
        const expiresIn = 24*60*60;
        const accessToken = jwt.sign({id: user.id},
            SECRET_KEY, {
                expiresIn: expiresIn
            });
    const dataUser = {
        nombre: user.nombre,
        email: user.email,
        accessToken: accessToken,
        expiresIn: expiresIn
        }
        // response 
    res.send({ dataUser });  
    });
    
}

exports.loginUser = (req, res, next)=>{
    const userData = {
        email: req.body.email,
        contrasena: req.body.contrasena 
    }
    User.findOne({email: userData.email}, (err, user)=>{
        if (err) return res.status(500).send('Server Error');
        if(!user){
            // Email no existe
            res.status(409).send({ message: 'Algo está mal!'})
        }else{
            const resultPassword = bcrypt.compareSync(userData.contrasena, user.contrasena);
            if (resultPassword) {
                const expiresIn = 24*60*60;
                const accessToken = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn: expiresIn});

                const dataUser = {
                    nombre: user.nombre,
                    email: user.email,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                    }
                res.send({dataUser})
            }else{
                // Contraseña incorrecta
                res.status(409).send({ message: 'Algo está mal!'})
            }
        }
    })
}