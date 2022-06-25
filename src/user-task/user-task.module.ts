import { Module } from '@nestjs/common';
import { UserTaskService } from './user-task.service';
import { UserTaskController } from './user-task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTaskEntity } from './entities/user-task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserTaskEntity])],
  exports: [TypeOrmModule],
  controllers: [UserTaskController],
  providers: [UserTaskService],
})
export class UserTaskModule {}
