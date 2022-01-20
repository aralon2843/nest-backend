import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreateMainPageDto } from './dto/create-main-page.dto';
import { FindMainPageDto } from './dto/find-main-page.dto';
import { MainPageModel } from './main-page.model';
import { DocumentType } from '@typegoose/typegoose';

@Injectable()
export class MainPageService {
  constructor(
    @InjectModel(MainPageModel)
    private readonly mainPageModel: ModelType<MainPageModel>,
  ) {}

  async create(dto: CreateMainPageDto) {
    return this.mainPageModel.create(dto);
  }

  async findById(id: string) {
    return this.mainPageModel.findById(id).exec();
  }

  async deleteById(id: string) {
    return this.mainPageModel.findByIdAndDelete(id).exec();
  }

  async updateById(id: string, dto: MainPageModel) {
    return this.mainPageModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async findByAlias(alias: string) {
    return this.mainPageModel.findOne({ alias }).exec();
  }

  async findByCategory(
    dto: FindMainPageDto,
  ): Promise<DocumentType<MainPageModel | null>[]> {
    return this.mainPageModel
      .find(
        { category: dto.firstLevelCategory },
        { alias: 1, secondLevelCategory: 1, title: 1 },
      )
      .exec();
  }
}
