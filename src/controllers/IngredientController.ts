import { Request, Response } from 'express';
import Ingrediente from '../../models/Ingrediente';

export class IngredientController {
    async ingredRegister(req: Request, res: Response) {
        const { nome_ingrediente, unidade_medida, quantidade_ingrediente } = req.body;
        try {
            await Ingrediente.create({ nome_ingrediente, unidade_medida, quantidade_ingrediente });
            res.render('RegistrarNovoIngred');
        } catch (error) {
            console.error(error);
            res.send("Não foi possível finalizar o cadastro do ingrediente");
        }
    }
}