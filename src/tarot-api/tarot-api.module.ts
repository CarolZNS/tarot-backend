import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TarotApiService } from './tarot-api.service';
import { TarotApiController } from './tarot-api.controller';

@Module({
  imports: [HttpModule],
  controllers: [TarotApiController],
  providers: [TarotApiService],
})

export class TarotApiModule {}
