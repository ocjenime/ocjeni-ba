import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix
  app.setGlobalPrefix('api');

  // CORS
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  });

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Ocjeni.ba API')
    .setDescription('API za Ocjeni.ba platformu za recenzije')
    .setVersion('1.0')
    .addTag('auth', 'Autentifikacija')
    .addTag('users', 'Korisnici')
    .addTag('businesses', 'Tvrtke')
    .addTag('reviews', 'Recenzije')
    .addTag('categories', 'Kategorije')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`🚀 Ocjeni.ba API radi na portu: ${port}`);
  console.log(`📚 Dokumentacija: http://localhost:${port}/api/docs`);
}
bootstrap();
