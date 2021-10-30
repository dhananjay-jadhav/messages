import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { MessagesApiService } from './messages-api.service';
import { CreateMessagesApiDto } from './dto/create-messages-api.dto';
import { UpdateMessagesApiDto } from './dto/update-messages-api.dto';

@Controller('messages-api')
export class MessagesApiController {
  constructor(private readonly messagesApiService: MessagesApiService) {}

  @Post()
  create(@Body() createMessagesApiDto: CreateMessagesApiDto) {
    console.log(createMessagesApiDto);
    return this.messagesApiService.create(createMessagesApiDto);
  }

  @Get()
  findAll() {
    return this.messagesApiService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const message = await this.messagesApiService.findOne(id);
    if (!message) {
      throw new NotFoundException('Messages not found with Id:', id);
    }
    return message;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMessagesApiDto: UpdateMessagesApiDto,
  ) {
    return this.messagesApiService.update(id, updateMessagesApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagesApiService.remove(id);
  }
}
