import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response } from 'express';
import * as cors from "cors"
function middlWareAll(req:Request,res:Response,next:any){
  console.log('Enter global middleware...')
  next()
}

async function bootstrap() {
 
  const app = await NestFactory.create(AppModule);
  app.use(cors())  //跨域访问
  app.use(middlWareAll)
  await app.listen(3000);
}
bootstrap();
