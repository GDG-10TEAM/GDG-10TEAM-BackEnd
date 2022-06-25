import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskHistoryService } from './task-history.service';
import { CreateTaskHistoryDto } from './dto/create-task-history.dto';
import { UpdateTaskHistoryDto } from './dto/update-task-history.dto';

@Controller('task-history')
export class TaskHistoryController {
  constructor(private readonly taskHistoryService: TaskHistoryService) {}

  @Get(':category_seq/user/:user_seq')
  findAll(@Param('category_seq') category_seq: number, @Param('user_seq') user_seq: number) {
    return this.taskHistoryService.getTaskHistory(category_seq, user_seq);
  }
}
