import { ApiProperty } from '@nestjs/swagger';
import { z } from 'zod';

export const RegisterSchema = z.object({
  email: z.email({ message: 'Email inválido' }),
  password: z.string().min(6, { message: 'A senha deve ter pelo menos 6 caracteres' }),
});

export class RegisterDto {
  @ApiProperty({ example: 'valid@email.com' })
  email: string;

  @ApiProperty({ example: 'password123' })
  password: string;
}