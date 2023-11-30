import { Request, Response } from 'express';
import * as coffeeService from '../../services/coffee_service';

export const getCoffee = async (req: Request<object, object, object, { coffeeName: string | undefined }>
    , res: Response) => {
    const coffeeName = req.query.coffeeName;
    const coffee = coffeeService.getCoffee(coffeeName);
    res.json(coffee).status(200);
};


export const getCoffeeLover = async (req: Request, res: Response) => {
    const coffeeLoverText = coffeeService.getCoffeeLover();
    res.status(200).json(coffeeLoverText);
};