import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Masterreklamaga xush keliubsiz Uyga vazifa deploy bajarildi';
  }
}
