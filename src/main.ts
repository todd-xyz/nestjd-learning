import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response } from 'express';
import * as cors from "cors"
import * as session from "express-session"
import { VersioningType } from '@nestjs/common';

function middlWareAll(req:Request,res:Response,next:any){
  console.log('Enter global middleware...')
  next()
}

async function bootstrap() {
 
  const app = await NestFactory.create(AppModule);
  
  //设置API版本
  app.enableVersioning({
    type:VersioningType.URI
  })

  //用第三方插件，跨域访问
  app.use(cors())  
  app.use(session({
    secret: 'XSDSDse@34',
    rolling:true,
    name:'xutao.sid',
    cookie:{
      maxAge:999999,
    }
  }))
  
  //全局中间件middleware
  app.use(middlWareAll)

  await app.listen(3000);
}
bootstrap();
