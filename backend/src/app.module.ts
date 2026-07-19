import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { BusinessesModule } from './modules/businesses/businesses.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ModerationModule } from './modules/moderation/moderation.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';

@Module({
  imports: [
    // Konfiguracija okoline
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // Baza podataka
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get('DB_USERNAME', 'ocjeni'),
        password: configService.get('DB_PASSWORD', 'ocjeni123'),
        database: configService.get('DB_DATABASE', 'ocjeni_ba'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: configService.get('DB_SYNCHRONIZE', 'true') === 'true',
        logging: configService.get('DB_LOGGING', 'false') === 'true',
      }),
    }),

    // Moduli
    AuthModule,
    UsersModule,
    BusinessesModule,
    ReviewsModule,
    CategoriesModule,
    ModerationModule,
    NotificationsModule,
    AnalyticsModule,
  ],
})
export class AppModule {}
