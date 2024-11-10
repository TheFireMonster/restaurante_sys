import { Request, Response } from 'express';

export class MenuController {
    async getMenu(req: Request, res: Response) {
        res.send('Hello World');
    }
}