const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database');
require('./config');

//Settings
app.set('port', process.env.PORT || 3000);

//passport
const passport = require('passport');
const session = require('express-session');
require('./passport/local-auth');
const flash = require('connect-flash');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    app.locals.signupMessage = req.flash('singupMessage');
    next();
});


//Routes
app.use('/api/cancha', require('./routes/cancha.routes'));
app.use('/api/cliente', require('./routes/cliente.routes'));
app.use('/api/tipoCancha', require('./routes/tipoCancha.routes'));
app.use('/api/empresa', require('./routes/empresa.routes'));
app.use('/api/hora', require('./routes/hora.routes'));
app.use('/api/reserva', require('./routes/reserva.routes'));
app.use('/api/valor', require('./routes/valor.routes'));
app.use('/api/tipoCliente', require('./routes/tipoCliente.routes'));
app.use('/api/horario', require('./routes/horario.routes'));
app.use('/api/canchaHora', require('./routes/canchaHora.routes'));

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});