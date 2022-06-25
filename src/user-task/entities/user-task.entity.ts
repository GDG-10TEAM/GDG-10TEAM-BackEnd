import { Column, Entity, PrimaryColumn } from 'typeorm';

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
