import { PartialType } from '@nestjs/mapped-types';
import { CreateMessagesApiDto } from './create-messages-api.dto';

export class UpdateMessagesApiDto extends PartialType(CreateMessagesApiDto) {}
