import { Module } from '@nestjs/common';
import { MessagesApiService } from './messages-api.service';
import { MessagesApiController } from './messages-api.controller';
import { MessagesApiRepository } from './messages.repository';

@Module({
  controllers: [MessagesApiController],
  providers: [MessagesApiService, MessagesApiRepository],
})
export class MessagesApiModule {}
