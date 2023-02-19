import { Module } from '@nestjs/common';
import { FetcherProviderService } from 'src/providers/fetcher-provider/fetcher-provider.service';
import { ProviderModule } from 'src/providers/provider.module';

@Module({
  imports: [ProviderModule],
  providers: [FetcherProviderService],
  exports: [],
})
export class AdapterModule {}
