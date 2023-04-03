// import libraries
const express = require('express');
const {v4: uuidv4 } = require('uuid'); 

// init app instance
const app = express();
app.use(express.json())

// customers list
/**
 * cpf: string
 * name: string
 * id: string
 * statement: []
 */
const customers = [];

// account create route
app.post('/account', (req, res) => {
    // get cpf, name from request
    const { cpf, name} = req.body;
    // generate id
    const id = uuidv4();

    // store customer
    customers.push({
        id,
        cpf,
        name,
        statement: []
    });

    // return created state with customer id
    return res.status(201).send({id: id});
})

// init listeners app port
app.listen(3333);