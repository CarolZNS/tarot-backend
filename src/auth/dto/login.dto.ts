import { BadRequestException } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import z from "zod";

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(6)
});

export class LoginDto {
    @ApiProperty({example: 'valid@email.com'})
    email: string;

    @ApiProperty({example: 'password123'})
    password: string;
}