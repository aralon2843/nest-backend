export enum MainPageCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class MainPageModel {
  _id: number;
  firstLevelCategory: MainPageCategory;
  secondLevelCategory: string;
  title: string;
  category: string;
  vacancies: {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  };
  advantages: {
    title: string;
    description: string;
  }[];
  seoText: string;
  tagsTitle: string;
  tags: string[];
}
