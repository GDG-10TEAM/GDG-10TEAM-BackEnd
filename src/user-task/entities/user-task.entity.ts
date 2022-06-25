import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { Task } from '../../task/entities/task.entity';

@Entity('user_task')
export class UserTaskEntity {
  @PrimaryColumn()
  seq: number;

  @Column()
  user_seq: number;

  @Column()
  task_seq: number;

  @Column({ length: 20 })
  frequency: string;

  @Column()
  start_date: string;

  @Column()
  end_date?: string;
}
