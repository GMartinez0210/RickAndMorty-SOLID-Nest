import { Test, TestingModule } from '@nestjs/testing';
import { FetcherProviderService } from './fetcher-provider.service';

describe('FetcherProviderService', () => {
  let service: FetcherProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FetcherProviderService],
    }).compile();

    service = module.get<FetcherProviderService>(FetcherProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
