import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Therapy} from "../therapy/therapy.model";
import {Service} from "../services/services.model";

interface AppointmentCreationAttrs {
    name: string;
    number: Number
    recommendations: string
    date: string
    completed: boolean
    therapyId : Number
}

@Table({tableName: 'appointments'})
export class Appointment extends Model<Appointment, AppointmentCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id : Number

    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @Column({type: DataType.INTEGER, allowNull: false})
    number: Number

    @Column({type: DataType.STRING, allowNull: true})
    recommendations: string

    @Column({type: DataType.STRING, allowNull: false})
    date: string

    @Column({type: DataType.BOOLEAN, allowNull: false})
    completed: boolean

    @Column({type: DataType.INTEGER})
    @ForeignKey(() => Therapy)
    therapyId : Number

    @BelongsTo(() => Therapy)
    therapy: Therapy

    @HasMany(()=> Service)
    services: Service[]
}