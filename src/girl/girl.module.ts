import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GirlController } from './girl.controller';
import { GirlService } from './girl.service';
import { TypeOrmModule } from "@nestjs/typeorm"
import { Girl } from "../girl/entities/girl.entity"
import { CounterMiddleware } from "../counter/counter.middleware"
import {BoyService} from "../boy/boy.service"
@Module({
  imports: [TypeOrmModule.forFeature([Girl])],
  controllers: [GirlController],
  providers: [BoyService,{
    provide: 'girl',
    useClass: Girl
  }, {
    provide: 'defaultGirls',
    useValue: ['fener', 'nana', 'xiaole']
  }, {
    provide: 'favFac',
    useFactory() {
      return "fener"
    }
  }]
})
export class GirlModule implements NestModule { 
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CounterMiddleware).forRoutes('girl')
  }
}
