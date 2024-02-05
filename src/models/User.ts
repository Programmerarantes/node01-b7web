import {Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

interface DataNascimento {
    dia: number;
    mes: number;
    ano: number;
}

interface UserInstance extends Model {
    id: number,
    nome: string,
    cpf: string,
    rg: string, 
    data_nascimento: DataNascimento,
    sexo: string
}

export const User = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING
    },
    cpf: {
        type: DataTypes.STRING
    },
    rg: {
        type: DataTypes.STRING
    },
    data_nascimento: {
        type: DataTypes.DATE
    },
    sexo: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'pessoas',
    timestamps: false
});