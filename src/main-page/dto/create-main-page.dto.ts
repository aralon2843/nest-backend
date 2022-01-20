import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { MainPageCategory } from '../main-page.model';

export class AdvantageDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}

export class HhDataDto {
  @IsNumber()
  count: number;

  @IsNumber()
  juniorSalary: number;

  @IsNumber()
  middleSalary: number;

  @IsNumber()
  seniorSalary: number;
}

export class CreateMainPageDto {
  @IsEnum(MainPageCategory)
  firstLevelCategory: MainPageCategory;

  @IsString()
  secondLevelCategory: string;

  @IsString()
  alias: string;

  @IsString()
  title: string;

  @IsString()
  category: string;

  @Type(() => HhDataDto)
  @IsOptional()
  @ValidateNested()
  hh?: HhDataDto;

  @IsArray()
  @Type(() => AdvantageDto)
  @ValidateNested()
  advantages: AdvantageDto[];

  @IsString()
  seoText: string;

  @IsString()
  tagsTitle: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];
}
