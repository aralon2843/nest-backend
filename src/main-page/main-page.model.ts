import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export enum MainPageCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface MainPageModel extends Base {}

class Advantage {
  @prop()
  title: string;

  @prop()
  description: string;
}

class HhData {
  @prop()
  count: number;

  @prop()
  juniorSalary: number;

  @prop()
  middleSalary: number;

  @prop()
  seniorSalary: number;
}

export class MainPageModel extends TimeStamps {
  @prop({ enum: () => MainPageCategory })
  firstLevelCategory: MainPageCategory;

  @prop()
  secondLevelCategory: string;

  @prop({ unique: true })
  alias: string;

  @prop()
  title: string;

  @prop()
  category: string;

  @prop({ type: () => HhData })
  hh: HhData;

  @prop({
    type: () => [Advantage],
  })
  advantages: Advantage[];

  @prop()
  seoText: string;

  @prop()
  tagsTitle: string;

  @prop({ type: () => [String] })
  tags: string[];
}
