import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Therapy} from "../therapy/therapy.model";

interface UserCreationAttrs {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    patronymic: string;
    DOB: string;
    role: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id : Number
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string
    @Column({type: DataType.STRING, allowNull: false})
    password: string
    @Column({type: DataType.STRING})
    photo: string
    @Column({type: DataType.STRING, allowNull: false})
    firstName: string
    @Column({type: DataType.STRING, allowNull: false})
    lastName: string
    @Column({type: DataType.STRING})
    patronymic: string
    @Column({type: DataType.STRING, allowNull: false})
    DOB: string
    @Column({type: DataType.STRING, allowNull: false})
    role: string
    @HasMany(()=> Therapy)
    therapy: Therapy[]
}