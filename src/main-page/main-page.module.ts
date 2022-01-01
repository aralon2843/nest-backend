import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';
import { MainPageController } from './main-page.controller';
import { MainPageModel } from './main-page.model';

@Module({
  controllers: [MainPageController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: MainPageModel,
        schemaOptions: {
          collection: 'MainPage',
        },
      },
    ]),
  ],
})
export class MainPageModule {}
