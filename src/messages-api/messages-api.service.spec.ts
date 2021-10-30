import { Test, TestingModule } from '@nestjs/testing';
import { MessagesApiService } from './messages-api.service';

describe('MessagesApiService', () => {
  let service: MessagesApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagesApiService],
    }).compile();

    service = module.get<MessagesApiService>(MessagesApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
