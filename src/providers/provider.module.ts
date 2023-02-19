import { Module } from '@nestjs/common';
import {
  LocalDataBaseService,
  AxiosService,
  FetchService,
  FetcherProviderService,
} from './fetcher-provider/fetcher-provider.service';

@Module({
  providers: [
    {
      provide: 'IFetcherProvider',
      useClass: FetcherProviderService,
    },
    FetcherProviderService,
    LocalDataBaseService,
    AxiosService,
    FetchService,
  ],
  exports: [
    'IFetcherProvider',
    FetcherProviderService,
    LocalDataBaseService,
    AxiosService,
    FetchService,
  ],
})
export class ProviderModule {}
