import { Column, Entity, PrimaryColumn, Timestamp } from 'typeorm';

@Entity()
export class Role {
  @PrimaryColumn({ type: 'varchar', comment: '角色id'})
  roleID: string

  @Column({ type: 'varchar', comment: '角色名称', length: 150})
  roleName: string

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
