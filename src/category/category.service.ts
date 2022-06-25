import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskHistory } from 'task-history/entities/task-history.entity';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(TaskHistory)
    private taskHistoryRepository: Repository<TaskHistory>,
  ) {}

  getList() {
    return this.categoryRepository.find();
  }

  findCategoryTask(category_seq: number, userId: number) {
    this.taskHistoryRepository
      .createQueryBuilder('th')
      .innerJoin('th.task_seq', 'task')
      .getMany()
      .then((result) => {
        console.log(result);
        return result;
      });
  }
}
