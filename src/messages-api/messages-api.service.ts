import { MessagesApiRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';
import { CreateMessagesApiDto } from './dto/create-messages-api.dto';
import { UpdateMessagesApiDto } from './dto/update-messages-api.dto';

@Injectable()
export class MessagesApiService {
  constructor(private readonly messagesRepo: MessagesApiRepository) {}

  create(createMessagesApiDto: CreateMessagesApiDto) {
    return this.messagesRepo.create(createMessagesApiDto.content);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  update(id: string, updateMessagesApiDto: UpdateMessagesApiDto) {
    return `This action updates a #${id} messagesApi`;
  }

  remove(id: string) {
    return `This action removes a #${id} messagesApi`;
  }
}
