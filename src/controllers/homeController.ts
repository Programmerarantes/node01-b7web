import { Request, Response } from "express";
import { Op } from 'sequelize';
import { Product } from '../models/Product';
import { User } from "../models/User";


export const home = async (req: Request, res: Response)=> {
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


    let age: number = 51;
    let showOld: boolean = false;

    if(age > 50){
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getPriceAfter(12);
    
    res.render('pages/home', {
        
        name: "Matheus",
        lastname: "Chaves",
        showOld,
        products: list,
        expensives: expensiveList
    });

};