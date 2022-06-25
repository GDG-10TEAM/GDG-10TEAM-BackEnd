import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryColumn()
  seq: string;

  @Column({ length: 20 })
  user_id: string;
}
