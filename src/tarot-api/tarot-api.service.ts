import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class TarotApiService {
  constructor(private http: HttpService) {}

  async drawRandomCard(): Promise<AxiosResponse<any>> {
    try {
      const { data } = await lastValueFrom(
        this.http.get('https://tarotapi.dev/api/v1/cards/random?n=1'),
      );
      return data;
    } catch {
      throw new Error('Falha ao pegar uma nova carta');
    }
  }
}
