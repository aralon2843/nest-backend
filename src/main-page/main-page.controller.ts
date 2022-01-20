import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Body,
  Patch,
  HttpCode,
  NotFoundException,
} from '@nestjs/common';
import { CreateMainPageDto } from './dto/create-main-page.dto';
import { FindMainPageDto } from './dto/find-main-page.dto';
import { MAIN_PAGE_NOT_FOUND_ERROR } from './main-page.constants';
import { MainPageModel } from './main-page.model';
import { MainPageService } from './main-page.service';

@Controller('main-page')
export class MainPageController {
  constructor(private readonly mainPageService: MainPageService) {}

  @Post('create')
  async create(@Body() dto: CreateMainPageDto) {
    return await this.mainPageService.create(dto);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    const mainPage = await this.mainPageService.findById(id);

    if (!mainPage) {
      throw new NotFoundException(MAIN_PAGE_NOT_FOUND_ERROR);
    }

    return mainPage;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedMainPage = await this.mainPageService.deleteById(id);

    if (!deletedMainPage) {
      throw new NotFoundException(MAIN_PAGE_NOT_FOUND_ERROR);
    }

    return deletedMainPage;
  }

  @Patch(':id')
  async patch(@Param('id') id: string, dto: MainPageModel) {
    const updatedMainPage = await this.mainPageService.updateById(id, dto);

    if (!updatedMainPage) {
      throw new NotFoundException(MAIN_PAGE_NOT_FOUND_ERROR);
    }

    return updatedMainPage;
  }

  @Get('byAlias/:alias')
  async getByAlias(@Param('alias') alias: string) {
    const mainPage = this.mainPageService.findByAlias(alias);

    if (!mainPage) {
      throw new NotFoundException(MAIN_PAGE_NOT_FOUND_ERROR);
    }

    return mainPage;
  }

  @Post('find')
  @HttpCode(200)
  async find(@Body() dto: FindMainPageDto) {
    return await this.mainPageService.findByCategory(dto);
  }
}
