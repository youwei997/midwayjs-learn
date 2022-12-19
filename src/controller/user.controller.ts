import { Body, Controller, Get, Inject, Post } from '@midwayjs/decorator';
import { User } from '../entity/User';
import { UserService } from '../service/user.service';
@Controller('/')
export class HomeController {
  @Inject()
  userService: UserService;

  @Post('/create')
  async create(@Body() user: User): Promise<User> {
    Object.assign(user, {
      id: 1234,
      regtime: new Date(),
    });
    return this.userService.create(user);
  }

  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }
}
