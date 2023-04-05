import { Module,Global, DynamicModule} from "@nestjs/common"

@Global()
@Module(
    { //静态模块
    // providers:[
    //     {
    //         provide:'Config',
    //         useValue:{
    //             shopName:'cyh'
    //         }
    //     }
    // ],
    // exports:[
    //     {
    //         provide:'Config',
    //         useValue:{
    //             shopName:'cyh'
    //         }
    //     }
    // ]
})
export class ConfigModule{
    //动态模块
    static forRoot(option:string):DynamicModule{
       return{
        module:ConfigModule,
        providers:[
            {
                provide:'Config',
                useValue:{
                    shopName:'cyh' + option
                }
            }
        ],
        exports:[
            {
                provide:'Config',
                useValue:{
                    shopName:'cyh' + option
                }
            }
        ]
       }
    }
}

