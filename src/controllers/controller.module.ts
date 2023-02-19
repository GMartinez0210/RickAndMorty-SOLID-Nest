import { Module } from '@nestjs/common';
import { AdapterModule } from 'src/adapters/adapter.module';
import { ProviderModule } from 'src/providers/provider.module';
import { RickAndMortyController } from './rick-and-morty/rick-and-morty.controller';

@Module({
  controllers: [RickAndMortyController],
  imports: [AdapterModule, ProviderModule],
})
export class ControllerModule {}
