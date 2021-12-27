import { AuthDto } from './dto/auth.dto';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('register')
  async register(@Body() dto: AuthDto) {}

  @Post('login')
  @HttpCode(200)
  async login(@Body() dto: AuthDto) {}
}
