const clienteController = {};
const Cliente = require('../models/cliente');

clienteController.getClientes = async(req, res) => {
    const clientes = await Cliente.find()
    res.json(clientes);
};

clienteController.getSearch = async(req, res) => {
    const clientes = await Cliente.aggregate([
        //stage 1
        { $match: { nombre: "Jose" } }
    ]);
    res.json(clientes);
};

clienteController.createCLiente = async(req, res) => {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.json(cliente);
};

clienteController.getCliente = async(req, res) => {
    const cliente = await Cliente.findById(req.params.id);
    res.json(cliente);
};

clienteController.editCliente = async(req, res) => {
    const { id } = req.params;
    const cliente = {
        rut: req.body.rut,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        correo: req.body.correo,
        nacimiento: req.body.nacimiento,
        tipoCliente: req.body.tipoCliente
    };
    await Cliente.findByIdAndUpdate(id, { $set: cliente }, { new: true });
    res.json({ status: 'Cliente Actualizado' });
};

clienteController.deleteCliente = async(req, res) => {
    await Cliente.findByIdAndRemove(req.params.id);
    res.json({ status: 'Cliente Borrado' });
};

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

//LOGICA DE LA ACC

clienteController.register = async(req, res) => {
    const { username, correo, contraseña, contraseña2 } = req.body;

    let errors = [];

    //Valida los campos
    if (!username || !correo || !contraseña || !contraseña2) {
        errors.push({ msg: 'Llene todos los campos' });
    }

    //Valida la contraseña y contraseña2
    if (contraseña !== contraseña2) {
        errors.push({ msg: 'Las contraseñas no coinciden' });
    }

    //Valida el largo de la contraseña 8======D
    if (contraseña.length < 6) {
        errors.push({ msg: 'La contraseña debe tener minimo 6 caracteres' });
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            username,
            correo,
            contraseña,
            contraseña2
        });
    } else {
        Cliente.findOne({ correo: correo })
            .then(user => {
                if (cliente) {
                    //Si existe
                    error.push({ msg: 'El correo ya esta registrado' });
                    res.render('register', {
                        errors,
                        username,
                        correo,
                        contraseña,
                        contraseña2
                    });
                } else {
                    const newCliente = new Cliente({
                        errors,
                        username,
                        correo,
                        contraseña,
                        contraseña2
                    });

                    console.log(newCliente)
                    res.send('hello');
                }
            });
    }
};



module.exports = clienteController;