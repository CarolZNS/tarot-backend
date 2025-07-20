import { Controller, Get, UseGuards } from '@nestjs/common';
import { TarotApiService } from './tarot-api.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('tarot')
@ApiBearerAuth()
@Controller('draw_card')
export class TarotApiController {
  constructor(private readonly service: TarotApiService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Pega os dados de uma carta de forma aleatória' })
  @ApiResponse({ status: 200, description: 'Retorno de uma carta aleatória com sucesso' })
  @ApiResponse({ status: 401, description: 'Usuário não autorizado a retirar uma carta' })
  async getData() {
    return this.service.drawRandomCard();
  }
}
