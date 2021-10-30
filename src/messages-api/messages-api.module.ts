import { Module } from '@nestjs/common';
import { MessagesApiService } from './messages-api.service';
import { MessagesApiController } from './messages-api.controller';

@Module({
  controllers: [MessagesApiController],
  providers: [MessagesApiService]
})
export class MessagesApiModule {}
