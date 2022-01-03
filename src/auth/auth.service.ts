import { AuthDto } from './dto/auth.dto';
import { UserModel } from './user.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { genSaltSync, hashSync } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
  ) {}

  async createUser(dto: AuthDto): Promise<DocumentType<UserModel>> {
    const salt = genSaltSync(10);
    const newUser = new this.userModel({
      email: dto.login,
      passwordHash: hashSync(dto.password, salt),
    });

    return newUser.save();
  }

  async findUser(email: string): Promise<DocumentType<UserModel>> {
    return this.userModel.findOne({ email: email }).exec();
  }

  async loginUser() {}
}
