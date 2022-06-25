import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { TaskHistory } from 'task-history/entities/task-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), TypeOrmModule.forFeature([TaskHistory])],
  exports: [TypeOrmModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
