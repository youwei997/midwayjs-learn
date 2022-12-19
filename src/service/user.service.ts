import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { User } from '../entity/User';
import { Repository } from 'typeorm';
import { InjectEntityModel } from '@midwayjs/typeorm';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async create(user: User): Promise<User> {
    return await this.userModel.save(user);
  }
  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
