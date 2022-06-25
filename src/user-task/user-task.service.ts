import { Injectable } from '@nestjs/common';
import { CreateUserTaskDto } from './dto/create-user-task.dto';
import { UpdateUserTaskDto } from './dto/update-user-task.dto';
import { UserTaskEntity } from './entities/user-task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../task/entities/task.entity';

@Injectable()
export class UserTaskService {
  constructor(@InjectRepository(UserTaskEntity) private userTaskReposity: Repository<UserTaskEntity>) {}

  create(createUserTaskDto: CreateUserTaskDto) {
    return 'This action adds a new userTask';
  }

  findAll(userSeq: string) {
    return this.userTaskReposity
      .createQueryBuilder('userTask')
      .select(['task_seq', 'end_date', 't.name as name'])
      .where('user_seq = :userSeq', { userSeq })
      .innerJoin(Task, 't')
      .getRawMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} userTask`;
  }

  update(id: number, updateUserTaskDto: UpdateUserTaskDto) {
    return `This action updates a #${id} userTask`;
  }

  remove(id: number) {
    return `This action removes a #${id} userTask`;
  }
}
