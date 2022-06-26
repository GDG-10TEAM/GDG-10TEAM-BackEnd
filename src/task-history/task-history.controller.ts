import { Controller, Get, Param } from '@nestjs/common';
import { TaskHistoryService } from './task-history.service';

@Controller('task-history')
export class TaskHistoryController {
  constructor(private readonly taskHistoryService: TaskHistoryService) {}

  @Get(':category_seq/user/:user_seq')
  findAll(@Param('category_seq') category_seq: number, @Param('user_seq') user_seq: number) {
    return this.taskHistoryService.getTaskHistory(category_seq, user_seq);
  }
}
