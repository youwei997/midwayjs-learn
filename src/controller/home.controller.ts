import { Controller, Get } from '@midwayjs/decorator';

@Controller('/api')
export class UserController {
  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }
}
