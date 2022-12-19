import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('user')
export class User {
  // nullable 是否可以为空

  // 主键
  @PrimaryColumn({ type: 'bigint' })
  id: number;
  // 用户名
  @Column({ length: 100, nullable: false, unique: true })
  username: string;

  // 密码
  @Column({ length: 20, nullable: false })
  password: string;

  // 手机号
  @Column({ length: 200, nullable: true, unique: true })
  phoneNum: string;

  // 创建时间
  @Column()
  regtime: Date;
}
