import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { User } from '../entity/User';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectEntityModel } from '@midwayjs/typeorm';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async create(user: User): Promise<User> {
    return await this.userModel.save(user);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.userModel.delete(id);
  }

  async modify(user: User): Promise<UpdateResult> {
    const id = user.id;
    delete user.id;
    return await this.userModel.update(id, user);
  }

  async findById(id: number): Promise<User> {
    return await this.userModel.findOne({ where: { id } });
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
