import { Task } from 'task/entities/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from 'user/entities/user.entity';

@Entity()
export class TaskHistory {
  @PrimaryGeneratedColumn()
  seq: number;

  @ManyToOne(() => Task, (task) => task.seq)
  task_seq: number;

  @ManyToOne(() => UserEntity, (user) => user.seq)
  user_seq: number;

  @Column()
  image_url: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  is_finish: boolean;

  @Column()
  deleted_at: Date;
}
