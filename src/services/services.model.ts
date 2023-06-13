import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Appointment} from "../appointment/appointment.model";

interface ServiceCreationAttrs {
    name: string
    price: Number
    count: Number
    doctorSpecialization: string
    appointmentId : Number
}

@Table({tableName: 'services'})
export class Service extends Model<Service, ServiceCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id : Number

    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @Column({type: DataType.INTEGER, allowNull: false})
    price: Number

    @Column({type: DataType.INTEGER, allowNull: false})
    count: Number

    @Column({type: DataType.STRING, allowNull: true})
    doctorSpecialization: string

    @Column({type: DataType.INTEGER})
    @ForeignKey(() => Appointment)
    appointmentId : Number

    @BelongsTo(() => Appointment)
    appointment: Appointment

}