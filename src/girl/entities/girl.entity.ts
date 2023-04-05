import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn} from "typeorm"

@Entity()
export class Girl{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    age:number
    
    @Column()
    skill:string

    @CreateDateColumn({type:'timestamp'})
    ctrated_at:Date


}