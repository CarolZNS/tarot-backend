import { Body, Controller, Post, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { LoginDto, LoginSchema } from './dto/login.dto';
import { RegisterDto, RegisterSchema } from './dto/register.dto';
import z from 'zod';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('login')
  @ApiOperation({ summary: 'Login de usuário' })
  @ApiResponse({ status: 200, description: 'Usuário logado com sucesso' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas' })
  async login(@Body() loginDto: LoginDto) {
    const parseResult = LoginSchema.safeParse(loginDto);
    if (!parseResult.success) {
      throw new BadRequestException(z.treeifyError(parseResult.error));
    }
    console.log('aqui');
    const user = await this.authService.validateUser(loginDto.email, loginDto.password);
    console.log(user);
    if (!user) throw new UnauthorizedException('Credenciais inválidas');
    return this.authService.login(user);
  }

  @Post('register')
  @ApiOperation({ summary: 'Registro de novo usuário' })
  @ApiResponse({ status: 201, description: 'Usuário registrado com sucesso' })
  @ApiResponse({ status: 400, description: 'Credenciais inválidas' })
  async register(@Body() registerDto: RegisterDto) {
    const parseResult = RegisterSchema.safeParse(registerDto);
    if (!parseResult.success) {
      throw new BadRequestException(z.treeifyError(parseResult.error));
    }

    return this.usersService.createUser(registerDto.email, registerDto.password);
  }
}