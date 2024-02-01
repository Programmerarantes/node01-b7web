import { Request, Response } from "express";

import { Product } from '../models/Product';
import { User } from "../models/User";

export const home = async (req: Request, res: Response)=> {
    let users = await User.findAll({
        attributes: ['nome', 'cpf', 'data_nascimento']

    });
    console.log("Usuários:", JSON.stringify(users))

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
        expensives: expensiveList,
        users
    });

};