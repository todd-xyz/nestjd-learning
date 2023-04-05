import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm"
import {InjectRepository } from "@nestjs/typeorm"
import { Girl } from './entities/girl.entity';
import {GIRL} from "../types/index"
@Injectable()
export class GirlService {
    constructor(@InjectRepository(Girl) private readonly girl:Repository<Girl>){
    }

    getGirls(){
        return this.girl.find()
    }

    addGirl(girl :GIRL){
        return this.girl.save(girl)
    }

    delGirl(id:number){
        console.log("id=",id)
        return this.girl.delete(id)
    }

    updateGril(id:number,girl:GIRL){
        return this.girl.update(id,girl)
    }
   
}
