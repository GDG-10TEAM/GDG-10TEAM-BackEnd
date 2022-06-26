import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTaskService } from './user-task.service';
import { CreateUserTaskDto } from './dto/create-user-task.dto';
import { UpdateUserTaskDto } from './dto/update-user-task.dto';

@Controller('userTask')
export class UserTaskController {
  constructor(private readonly userTaskService: UserTaskService) {}

  @Get(':userSeq')
  getList(@Param('userSeq') userSeq: string) {
    return this.userTaskService.findAll(userSeq);
  }

  @Post()
  create(@Body() createUserTaskDto: CreateUserTaskDto) {
    return this.userTaskService.create(createUserTaskDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTaskService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserTaskDto: UpdateUserTaskDto) {
    return this.userTaskService.update(+id, updateUserTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTaskService.remove(+id);
  }
}
