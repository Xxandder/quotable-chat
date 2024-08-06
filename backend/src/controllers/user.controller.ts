import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories/user.repository";
import encryptService from "../utils/encrypt";
import { DEFAULT_AVATAR_URL } from "../constants/constants";
import { AuthError } from "../exceptions/exceptions";

class UserController{

    async register(req: Request, res: Response, next: NextFunction){
        const { firstName, lastName, email, password } = req.body

        const user = await userRepository.findByEmail(email);
        if(user){
            next(new AuthError({message: "User with such email already exists", status: 409}))
        }

        try{
            const passwordHash = await encryptService.hashPassword(password)

            const newUser = await userRepository.create({
                id: null, 
                firstName,
                lastName, 
                email,
                passwordHash,
                avatarUrl: DEFAULT_AVATAR_URL,
                createdAt: null,
                updatedAt: null
            })
            req.login(newUser, (err) => {
                if (err) return next(err);
                return res.status(201).json(newUser)
            });
           
        }catch(e){
            next(e)
        }
    }
}

const userController = new UserController();

export { userController };