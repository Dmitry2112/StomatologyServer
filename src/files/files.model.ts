import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/user.model";


interface FileCreationAttrs {
    date: string;
    type: string;
    fileName: string;
    userId: Number;
}

@Table({tableName: 'files'})
export class File extends Model<File, FileCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: Number;

    @Column({type: DataType.STRING, allowNull: false})
    date: string;

    @Column({type: DataType.STRING, allowNull: false})
    type: string;

    @Column({type: DataType.STRING})
    fileName: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: Number;

    @BelongsTo(() => User)
    user: User

}