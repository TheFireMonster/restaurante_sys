import { Request, Response } from 'express';

export class HomeController {
    async getHome(req: Request, res: Response) {
        res.render('home');
    }
}