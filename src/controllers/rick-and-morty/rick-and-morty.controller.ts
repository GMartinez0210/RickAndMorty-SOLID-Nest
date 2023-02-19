import {
  Controller,
  Get,
  Query,
  Res,
  ParseIntPipe,
  BadRequestException,
} from '@nestjs/common';
import { Response } from 'express';
import { FetcherService } from 'src/adapters/fetcher/fetcher.service';

import {
  AxiosService,
  FetchService,
  LocalDataBaseService,
} from 'src/providers/fetcher-provider/fetcher-provider.service';
import {
  RickAndMortyInfo,
  RickAndMortyResponse,
} from './interface/rick-and-morty.interface';

@Controller('rick-and-morty')
export class RickAndMortyController {
  private readonly _localDataBaseService = new LocalDataBaseService();
  private readonly _axiosService = new AxiosService();
  private readonly _fetchService = new FetchService();
  private readonly _fetcher = new FetcherService(this._axiosService);

  @Get()
  async get(@Query('page', ParseIntPipe) page: number, @Res() res: Response) {
    const url = 'https://rickandmortyapi.com/api/character';

    const info = await this._fetcher.getInfo<RickAndMortyInfo>(url);

    if (page > info.pages) {
      throw new BadRequestException(
        'The page sent is greater than the maximiun of pages available',
      );
    }

    const config = { params: { page } };

    const result = await this._fetcher.getData<RickAndMortyResponse>(
      url,
      config,
    );

    return res.json(result);
  }
}
