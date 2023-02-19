import { Injectable } from '@nestjs/common';

import { FetcherProviderService } from 'src/providers/fetcher-provider/fetcher-provider.service';

@Injectable()
export class FetcherService {
  private dataFetched;
  private infoFetched;

  constructor(
    private readonly _fetcherProviderService: FetcherProviderService,
  ) {}

  async getData<T>(url: string, config?: object) {
    if (!!this.dataFetched) {
      return this.dataFetched;
    }

    this.dataFetched = await this._fetcherProviderService.getData<T>(
      url,
      config,
    );
    return this.dataFetched;
  }

  async getInfo<T>(url: string) {
    if (!!this.infoFetched) {
      return this.infoFetched;
    }

    this.infoFetched = await this._fetcherProviderService.getInfo<T>(url);
    return this.infoFetched;
  }
}
