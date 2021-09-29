import User from '../models/user';
import { getRepository } from 'typeorm';
import { hash } from 'bcrypt';

import AppError from '../errors/AppError'

interface Request {
  name: string;
  email: string;
  password?: string;
}
export default class CreateUserService {
  async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = await getRepository(User);

    const checkUserExists = await usersRepository.findOne({ email: email });

    if (checkUserExists) {
      throw new AppError('Email address alredy used');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}
