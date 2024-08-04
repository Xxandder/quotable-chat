import { IRepository, UserEntity } from "../types/types";
import { User } from '../models/user.model';

class UserRepository implements IRepository<UserEntity>{

    async create(user: UserEntity): Promise<UserEntity>{
        const { firstName, lastName, email, avatarUrl, passwordHash } = user
        
        const createdUser = new User({
            firstName,
            lastName, 
            email,
            avatarUrl,
            passwordHash
        })
        await createdUser.save();
        
        return {
            id: createdUser.id,
            firstName: createdUser.firstName,
            lastName: createdUser.lastName,
            email: createdUser.email,
            avatarUrl: createdUser.avatarUrl,
            passwordHash: createdUser.passwordHash,
            createdAt: createdUser.createdAt,
            updatedAt: createdUser.updatedAt
        }
    }

    async findAll(): Promise<UserEntity[]> {
        return Promise.resolve([])
    }

    async findById(): Promise<UserEntity | null> {
        return Promise.resolve(null);
    }

    async findByEmail(email: string): Promise<UserEntity | null> {
        const user = await User.findOne({ email });
            
        if (!user) {
          return null;
        }
  
        const userEntity: UserEntity = {
          id: user.id,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          passwordHash: user.passwordHash,
          avatarUrl: user.avatarUrl,
        };

        return userEntity;
    }

    async update(): Promise<UserEntity | null> {
        return Promise.resolve(null)
    }

    async delete(): Promise<boolean> {
        return Promise.resolve(false)
    }

}

const userRepository = new UserRepository();

export { userRepository };