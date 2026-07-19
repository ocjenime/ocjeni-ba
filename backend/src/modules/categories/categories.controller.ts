import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiOperation({ summary: 'Kreiraj novu kategoriju' })
  @ApiResponse({ status: 201, description: 'Kategorija uspješno kreirana' })
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Dohvati sve kategorije' })
  async findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Dohvati kategoriju po slugu' })
  async findBySlug(@Param('slug') slug: string) {
    return this.categoriesService.findBySlug(slug);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Ažuriraj kategoriju' })
  async update(@Param('id') id: string, @Body() updateCategoryDto: Partial<CreateCategoryDto>) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Obriši kategoriju' })
  async remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
