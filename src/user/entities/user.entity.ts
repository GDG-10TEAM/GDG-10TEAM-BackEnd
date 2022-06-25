import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryColumn()
  seq: number;

  @Column({ length: 20 })
  user_id: string;
}
