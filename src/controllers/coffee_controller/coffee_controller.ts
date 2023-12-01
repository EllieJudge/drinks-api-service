import { Request, Response } from 'express';
import * as coffeeService from '../../services/coffee_service';

export const getCoffee = async (req: Request<object, object, object, { coffeeName: string | undefined }>, res: Response) => {
    const coffeeName = req.query.coffeeName;
    const coffee = coffeeService.getCoffee(coffeeName);
    res.json(coffee).status(200);
};


export const getCoffeeLover = async (req: Request, res: Response) => {
    const coffeeLoverText = coffeeService.getCoffeeLover();
    res.status(200).json(coffeeLoverText); // changed this to send json instead of text to treat this as a bit of data
};

export const getCoffeeAddict = async (req: Request, res: Response) => {
    const coffeeAddictText = coffeeService.getCoffeeAddict();
    res.send(coffeeAddictText) // sending plain text
    res.status(200)
}