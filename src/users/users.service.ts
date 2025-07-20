import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async findByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({email});
    }

    async createUser(email: string, password: string): Promise<User> {
        const encrypt = await bcrypt.hash(password, 10);
        return this.userModel.create({email, password: encrypt});
    }
}