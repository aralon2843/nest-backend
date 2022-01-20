import { IsEnum, IsNumber, ValidateNested } from 'class-validator';
import { MainPageCategory } from '../main-page.model';

export class FindMainPageDto {
  @IsEnum(MainPageCategory)
  @ValidateNested()
  firstLevelCategory: MainPageCategory;

  @IsNumber()
  limit: number;
}
