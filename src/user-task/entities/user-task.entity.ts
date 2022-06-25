import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { Task } from '../../task/entities/task.entity';

@Entity('user_task')
export class UserTaskEntity {
  @PrimaryColumn()
  seq: number;

  @ManyToOne(() => UserEntity, (user) => user.seq)
  user: UserEntity;

  @ManyToOne(() => Task, (task) => task.seq)
  task: Task;

  @Column({ length: 20 })
  frequency: string;

  @Column()
  start_date: string;

  @Column()
  end_date?: string;
}
