import { Request, Response } from 'express';
import User from '../models/user';

export const getUsers = async ( req: Request, res: Response ) =>
{
    const users = await User.findAll();
    res.json( { users } )
}

export const getUser = async ( req: Request, res: Response ) =>
{
    const { id } = req.params;
    const user = await User.findByPk( id );

    if ( user )
    {
        res.json( { user } )
    } else
    {
        res.status( 404 ).json(
            {
                msg: `There is no user with id nº ${ id }`
            } )
    }
}

export const postUser = async ( req: Request, res: Response ) =>
{
    const { body } = req;

    try
    {
        const emailExists = await User.findOne(
            {
                where: { email: body.email }
            } )

        if ( emailExists ) 
        {
            return res.status( 400 ).json(
                {
                    msg: `The email ${ body.email } is already registered`
                } )
        }

        const user = await User.create( body );
        res.json( { user } );
    } catch ( error )
    {
        console.log( error );
        res.status( 500 ).json( {
            msg: 'Internal Server Error'
        } )
    }
}


export const putUser = ( req: Request, res: Response ) =>
{
    const { id } = req.params;
    const { body } = req;

    res.json(
        {
            msg: 'putUser',
            body,
            id
        } )
}

export const deleteUser = ( req: Request, res: Response ) =>
{
    const { id } = req.params;

    res.json( {
        msg: 'deleteUser',
        id
    } )
}