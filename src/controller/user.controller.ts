import { Body, Controller, Get, Inject, Post, Query } from '@midwayjs/decorator';
import { DeleteResult, UpdateResult } from 'typeorm';

import { User } from '../entity/User';
import { UserService } from '../service/user.service';
import { SnowflakeIdGenerate } from '../utils/Snowflake';

@Controller('/')
export class HomeController {
  @Inject()
  userService: UserService;

  @Inject()
  idGenerate: SnowflakeIdGenerate;

  @Post('/create')
  async create(@Body() user: User): Promise<User> {
    Object.assign(user, {
      id: this.idGenerate.generate(),
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
