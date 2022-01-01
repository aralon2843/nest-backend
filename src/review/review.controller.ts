import { REVIEW_NOT_FOUND } from './review.constants';
import {
  Controller,
  Delete,
  Get,
  Post,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post('create')
  async create(@Body() dto: CreateReviewDto) {
    this.reviewService.create(dto);
  }

  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string) {
    this.reviewService.findByProductId(productId);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedDocument = await this.reviewService.delete(id);

    if (!deletedDocument) {
      throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }
}
