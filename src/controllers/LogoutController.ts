import { Request, Response } from 'express';

export class LogoutController {
    async logout (req: Request, res: Response) {
        res.clearCookie(process.env.REFRESH_COOKIE_NAME ?? '');
        res.clearCookie(process.env.AUTH_COOKIE_NAME ?? '');
        res.send('Logout successful')
    }
}