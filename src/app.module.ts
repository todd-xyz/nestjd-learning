import { Module } from '@nestjs/common';
import { GirlModule } from './girl/girl.module';
import { TypeOrmModule } from "@nestjs/typeorm"
import { BoyModule } from './boy/boy.module';
import { ConfigModule } from "./config/config.module"
import { UserModule } from './user/user.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      database: 'mydb',
      port: 5432,
      username: 'postgres',
      password: 'xt890633',
      retryDelay: 500,
      retryAttempts: 3,
      synchronize: true,
      autoLoadEntities: true

    }),
    GirlModule,
    BoyModule,
    UserModule,
    ConfigModule.forRoot('xuetao'),
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
