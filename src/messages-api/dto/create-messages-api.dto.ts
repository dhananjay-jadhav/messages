import { IsString } from 'class-validator';

export class CreateMessagesApiDto {
  @IsString()
  content: string;
}
