import { Injectable } from '@nestjs/common';
import { CreateMessagesApiDto } from './dto/create-messages-api.dto';
import { UpdateMessagesApiDto } from './dto/update-messages-api.dto';

@Injectable()
export class MessagesApiService {
  create(createMessagesApiDto: CreateMessagesApiDto) {
    return 'This action adds a new messagesApi';
  }

  findAll() {
    return `This action returns all messagesApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} messagesApi`;
  }

  update(id: number, updateMessagesApiDto: UpdateMessagesApiDto) {
    return `This action updates a #${id} messagesApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} messagesApi`;
  }
}
