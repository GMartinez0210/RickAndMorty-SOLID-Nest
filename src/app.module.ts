import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerModule } from './controllers/controller.module';
import { MiddlewareModule } from './middlewares/middleware.module';
import { AdapterModule } from './adapters/adapter.module';
import { ProviderModule } from './providers/provider.module';

@Module({
  imports: [ControllerModule, MiddlewareModule, AdapterModule, ProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
