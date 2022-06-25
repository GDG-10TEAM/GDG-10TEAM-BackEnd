import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  name: string;

  @Column()
  category_seq: number;
}
