import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'nestjs-auth-app',
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}