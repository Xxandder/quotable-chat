import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Express } from "express";
import { User } from '../models/user.model';
import encryptService from '../utils/encrypt';
import { UserEntity } from '../types/user-entity.type';
import { userRepository } from '../repositories/user.repository';
import { ErrorMessage } from '../enums/enums';

function initPassport(app: Express) {
    app.use(passport.initialize());
    app.use(passport.authenticate('session'));

    passport.use(new LocalStrategy({ usernameField: "email"},
        async (email: string, password: string, done) => {
          try {
            const user = await userRepository.findByEmail(email)
            
            if (!user) {
              return done(null, false, { message: ErrorMessage.USER_NOT_FOUND });
            }
      
            if (await encryptService.comparePasswords(password, user.passwordHash as string)) {
              return done(null, false, { message: ErrorMessage.INCORRECT_PASSWORD });
            }
            return done(null, user);
          } catch (error) {
            return done(error);
          }
        }
      ));
      
      passport.serializeUser<UserEntity>((user, done) => {
          done(null, user as UserEntity);
      });
      
      passport.deserializeUser(async (id: string, done) => {
        try {
          const user = await User.findById(id); 
          done(null, user);
        } catch (error) {
          done(error, null);
        }
      });
}


export { initPassport };