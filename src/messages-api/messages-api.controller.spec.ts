import { Test, TestingModule } from '@nestjs/testing';
import { MessagesApiController } from './messages-api.controller';
import { MessagesApiService } from './messages-api.service';

describe('MessagesApiController', () => {
  let controller: MessagesApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesApiController],
      providers: [MessagesApiService],
    }).compile();

    controller = module.get<MessagesApiController>(MessagesApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
