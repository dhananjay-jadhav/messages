import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesApiRepository {
  async create(content: string) {
    const contents = await readFile('src/data/messages.json', 'utf8');
    const messages = JSON.parse(contents);
    const id = Math.round(Math.random() * 999);
    messages[id] = { id, content };
    await writeFile('src/data/messages.json', JSON.stringify(messages));
  }

  async findAll() {
    const contents = await readFile('src/data/messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async findOne(id: string) {
    const contents = await readFile('src/data/messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }
}
