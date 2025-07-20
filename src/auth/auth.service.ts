import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    try {
      const user = await this.usersService.findByEmail(email);
      if (user && (await bcrypt.compare(password, user.password))) {
        return { email: user.email, id: user._id };
      }
    } catch {
      throw new UnauthorizedException('Email ou senha inválidos');
    }
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };
    console.log(payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
