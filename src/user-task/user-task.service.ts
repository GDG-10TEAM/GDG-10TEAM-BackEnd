import { Injectable } from '@nestjs/common';
import { CreateUserTaskDto } from './dto/create-user-task.dto';
import { UpdateUserTaskDto } from './dto/update-user-task.dto';
import { UserTaskEntity } from './entities/user-task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../task/entities/task.entity';
import { Category } from '../category/entities/category.entity';

@Injectable()
export class UserTaskService {
  constructor(@InjectRepository(UserTaskEntity) private userTaskReposity: Repository<UserTaskEntity>) {}

  findAll(userSeq: string) {
    console.log('call findAll');
    return this.userTaskReposity
      .createQueryBuilder('ut')
      .select(['task_seq', 'end_date', 't.name as name', 'c.name as category_name'])
      .where('user_seq = :userSeq', { userSeq })
      .andWhere('t.category_seq = c.seq')
      .andWhere('ut.task_seq = t.seq')
      .innerJoin(Task, 't')
      .innerJoin(Category, 'c')
      .getRawMany();
  }

  findOne(taskSeq: number) {
    return this.userTaskReposity.createQueryBuilder('ut').select(['*']).where('task_seq = :taskSeq', { taskSeq });
  }
}
