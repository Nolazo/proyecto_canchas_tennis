const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Cliente = require('../models/cliente');

passport.serializeUser((cliente, done) => {
    done(null, cliente.id);
});

passport.deserializeUser(async(id, done) => {
    const cliente = await Cliente.findById(id);
    done(null, cliente);
})

// passport.use(new LocalStrategy({
//     usernameField: 'username',
//     passwordField: 'password',
//     passReqToCallback: true
// }, async(req, username, password, done) => {

//     const cliente = Cliente.findOne({ username: username });
//     if (cliente) {
//         return done(null, false, req.flash('signupMessage', 'user ya tomado'));

//     } else {
//         const newCliente = new Cliente();
//         newCliente.username = username;
//         newCliente.password = newCliente.encryptPassword(password);
//         await newCliente.save();
//         done(null, newCliente);
//     }
// }));

passport.use(
    new LocalStrategy({ usernameField: 'username' },
        (username, password, done) => {
            Cliente.findOne({ username: username },
                (err, cliente) => {
                    if (err)
                        return done(err);
                    //usuario no registrado
                    else if (!cliente)
                        return done(null, false, { message: 'Usuario no registrado' });
                    //contraseña erronea
                    else if (!cliente.verifyPassword(password))
                        return done(null, false, { message: 'Contraseña Incorrecta' });
                    //autenticacion
                    else
                        return done(null, cliente);
                });
        })
);