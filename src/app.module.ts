import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { MessagesApiModule } from './messages-api/messages-api.module';

@Module({
  imports: [MessagesModule, MessagesApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
