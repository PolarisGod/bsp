import { Column, Entity, PrimaryColumn, Timestamp } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ type: 'varchar', comment: '用户id'})
  userID: string

  @Column({ type: 'varchar', comment: '用户姓名', length: 150})
  userName: string

  @Column({ type: 'varchar', comment: '出生年月', length: 32})
  birthDate: string 

  @Column({ type: 'smallint', comment: '性别 1男，2女，3未知', length: 1})
  genderCode: number

  @Column({ type: 'varchar', comment: '手机号', length: 150})
  phoneNo: string

  @Column({ type: 'varchar', comment: '身份证号', length: 64})
  credentialNo: string

  @Column({ type: 'varchar', comment: '邮箱', length: 200})
  email: string

  @Column({ type: 'varchar', comment: '户籍地址', length: 200})
  domiclleAddress: string

  @Column({ type: 'varchar', comment: '照片', length: 200})
  headPic: string

  @Column({ type: 'varchar', comment: '扩展内容', length: 255})
  extend: string

  @Column({ type: 'varchar', comment: '创建人', length: 32})
  creatorID: string

  @Column({ type: 'varchar', comment: '更新人', length: 32})
  updaterID: string

  @Column({ type: 'varchar', comment: '插入时间' })
  insertTime: Timestamp

  @Column({ type: 'varchar', comment: '更新时间' })
  updateTime: Timestamp
}
