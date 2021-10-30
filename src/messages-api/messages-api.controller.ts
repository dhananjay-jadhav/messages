import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessagesApiService } from './messages-api.service';
import { CreateMessagesApiDto } from './dto/create-messages-api.dto';
import { UpdateMessagesApiDto } from './dto/update-messages-api.dto';

@Controller('messages-api')
export class MessagesApiController {
  constructor(private readonly messagesApiService: MessagesApiService) {}

  @Post()
  create(@Body() createMessagesApiDto: CreateMessagesApiDto) {
    return this.messagesApiService.create(createMessagesApiDto);
  }

  @Get()
  findAll() {
    return this.messagesApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messagesApiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessagesApiDto: UpdateMessagesApiDto) {
    return this.messagesApiService.update(+id, updateMessagesApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagesApiService.remove(+id);
  }
}
