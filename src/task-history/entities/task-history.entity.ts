import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TaskHistory {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  task_seq: number;

  @Column()
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
