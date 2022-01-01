import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Body,
  Patch,
  HttpCode,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FindMainPageDto } from './dto/find-main-page.dto';
import { MainPageModel } from './main-page.model';

@Controller('main-page')
export class MainPageController {
  // constructor(private readonly configService: ConfigService) {}

  @Post('create')
  async create(@Body() dto: Omit<MainPageModel, '_id'>) {}

  @Get(':id')
  async get(@Param('id') id: string) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  async patch(@Param('id') id: string, dto: MainPageModel) {}

  @Post()
  @HttpCode(200)
  async find(@Body() dto: FindMainPageDto) {}
}
