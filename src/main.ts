import { NestFactory } from '@nestjs/core';
import { mongoose } from '@typegoose/typegoose';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await mongoose.connect(
    'mongodb+srv://root:qwertyslav1234@cluster0.5vdvn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  );
  app.setGlobalPrefix('api');
  await app.listen(3001);
}
bootstrap();
