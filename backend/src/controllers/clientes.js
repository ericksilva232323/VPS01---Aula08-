//dependencias - frameworks
const con = require ("../connection/conect").con;

//crud - create
const create  = (req, res)=>{
    let cpf = req.body.id;
    let nome_cliente = req.body.nome;
    let query = 'INSERT INTO cliente(cpf,nome_cliente)VALUE';
    query += `(${cpf},'${nome_cliente}')`;
    con.query(query, (err, result)=>{
        if(err){
            res.result(400).json(err).end;
        }else{
            res.status(201).json(req.body).end();
        }
    });
}

//crud - read

const read = (req, res)=>{
    let query = 'SELECT * FROM cliente';
    con.query(query, (err, result)=>{
        if(err){
            res.result(400).json(err).end;
        }else{
            res.status(200).json(result).end();
        }
    });
}

//crud - update

const update = (req, res)=>{
    let cpf = req.params.id;
    let nome_cliente = req.body.nome;
    let query = `UPDATE item SET cpf='${cpf}', nome_cliente='${nome_cliente}' WHERE cpf='${cpf}'`;
    con.query(query, (err, result)=>{
        if (err)
        res.status(400).json(err).end;
    else {
        if (result.affectedRows > 0)
            res.status(202).json(req.body).end();
        else
            res.status(404).json("Registro não encontrado").end();
        }
    });
}

//crud - delete

const del = (req, res)=>{
    let cpf = req.params.id;
    con.query(`DELETE FROM item WHERE cpf = '${cpf}'`, (err, result) =>{
        if(err)
            res.status(400).json(err).end();
        else{
            if(result.affectedRows > 0)
                res.status(202).json(req.body).end();
            else
                res.status(404).json("Registro não encontrado").end();
        }
    });
}

module.exports = {
    create,
    read,
    update,
    del
};