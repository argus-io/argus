import {Request, Response} from 'express';

const test = (req: Request, res: Response) => res.status(200).json({ 'message' : 'OK' })

module.exports = {
    test
}