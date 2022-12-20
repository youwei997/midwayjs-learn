import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Query,
} from '@midwayjs/decorator';
import { User } from '../entity/User';
import { UserService } from '../service/user.service';
import { DeleteResult, UpdateResult } from 'typeorm';
@Controller('/')
export class HomeController {
  @Inject()
  userService: UserService;

  @Post('/create')
  async create(@Body() user: User): Promise<User> {
    Object.assign(user, {
      regtime: new Date(),
    });
    return this.userService.create(user);
  }

  @Post('/delete')
  async delete(@Query('id') id: number): Promise<DeleteResult> {
    return this.userService.delete(id);
  }

  @Post('/modify')
  async modify(@Body() user: User): Promise<UpdateResult> {
    return this.userService.modify(user);
  }

  @Post('/findById')
  async findById(@Query('id') id: number): Promise<User> {
    return this.userService.findById(id);
  }

  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }
}
