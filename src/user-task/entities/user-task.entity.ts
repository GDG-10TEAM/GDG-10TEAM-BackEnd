import { Entity, ManyToOne } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';

@Entity('user_task')
export class UserTaskEntity {
  @ManyToOne(() => UserEntity, (user) => user.seq)
  user_seq: string;

  @ManyToOne(() => UserEntity, (user) => user.seq)
  task_seq: string;
}
