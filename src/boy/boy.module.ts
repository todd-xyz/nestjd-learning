import { Module } from '@nestjs/common';
import { BoyService } from './boy.service';
import { BoyController } from './boy.controller';

@Module({
  controllers: [BoyController],
  providers: [BoyService],
  exports:[BoyService]  //导出模块，否则不能使用
})
export class BoyModule {}
