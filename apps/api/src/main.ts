import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix for all routes
  app.setGlobalPrefix('api');

  // Enable CORS for mobile app and admin panel
  app.enableCors({
    origin: [
      'http://localhost:5173',
      'http://localhost:3000',
      'http://localhost:3002',
    ],
    credentials: true,
  });

  // Validate all incoming DTOs automatically
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip unknown fields
      forbidNonWhitelisted: true,
      transform: true, // Auto-convert types (e.g. string -> number)
    }),
  );

  // Swagger API Documentation
  const config = new DocumentBuilder()
    .setTitle('SmashIT API')
    .setDescription('Sports court booking platform API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT ?? 3001;
  await app.listen(port);
  console.log(`🚀 SmashIT API running on: http://localhost:${port}/api`);
  console.log(`📖 Swagger docs:           http://localhost:${port}/api/docs`);
}
void bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
