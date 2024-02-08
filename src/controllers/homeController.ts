import { Request, Response } from "express";
//import { Op } from 'sequelize';
import { User } from "../models/User";

export const criarUsuario = async (req: Request, res: Response) => {
    try {
        const { nome, cpf, rg, data_nascimento, sexo } = req.body;

        if (!nome || !cpf || !rg || !data_nascimento || !sexo) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const newUser = await User.create({
            nome,
            cpf,
            rg,
            data_nascimento,
            sexo,
        });

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
};

export const home = async (req: Request, res: Response)=> {
    let users = await User.findAll();
    
    //build + save
    /*const user = User.build({
        id: '55',
        nome: "Fulaninho",
        cpf: '1599514781',
        rg: '7778881112',
        data_nascimento: '2021-05-25',
        sexo: "Outros"
    })
    await user.save()

    //ceate
    const user = await User.create({
        nome: "Sr Miague Xavi ",
        cpf: '9988443333',
        rg: '1771881221',
        data_nascimento: '1999-10-10',
        sexo: "Masculino"
    })
    */

    
    res.render('pages/home', {
        
       users
    });

};