import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('list')
  findAll() {
    return this.categoryService.getList();
  }

  @Get(':category_seq/user/:userId')
  findOne(@Param('category_seq') category_seq: number, @Param('userId') userId: number) {
    return this.categoryService.findCategoryTask(category_seq, userId);
  }
}
