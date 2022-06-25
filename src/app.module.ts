import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { CategoryModule } from './category/category.module';
import { TaskHistoryModule } from './task-history/task-history.module';
import { Task } from './task/entities/task.entity';
import { Category } from 'category/entities/category.entity';
import { TaskHistory } from 'task-history/entities/task-history.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB,
      entities: [Task, Category, TaskHistory],
      synchronize: true,
    }),
    TaskModule,
    CategoryModule,
    TaskHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
