import { Request, Response } from "express";
import { User } from "../models/User";

export const home = async (req: Request, res: Response) => {
        
    let users = await User.findAll();

    res.render('pages/home', {
        
       users
    });

};

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

export const excluir = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
    
        await User.destroy({ where: { id } });
    
        res.redirect('/')
      } catch (error) {
        console.error('Erro ao excluir o usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
      }
}


