import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {User} from "../users/user.model";


interface TherapyCreationAttrs {
    userId : Number;
    name: string;
}

@Table({tableName: 'therapies'})
export class Therapy extends Model<Therapy, TherapyCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id : Number

    @Column({type: DataType.INTEGER})
    @ForeignKey(() => User)
    userId : Number

    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @BelongsTo(() => User)
    user: User
}