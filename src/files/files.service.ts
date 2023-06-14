import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs';
import * as uuid from 'uuid';
import {InjectModel} from "@nestjs/sequelize";
import {File} from "./files.model";
import {CreateFileDto} from "./dto/create-file.dto";

@Injectable()
export class FilesService {
    constructor(@InjectModel(File) private fileRepository: typeof File) {
    }

    async create(dto: CreateFileDto, image: any) {
        const fileName = await this.createFile(image, dto.fileName)
        const file = await this.fileRepository.create({...dto, fileName: fileName})
    }

    async createFile(file, oldFileName): Promise<string> {
        try {
            const fileNameArr = file.originalname.split('.')
            const rash = fileNameArr[fileNameArr.length - 1]
            const fileName = uuid.v4() + '.'+ rash;
            const filePath = path.resolve(__dirname, '..', 'static')
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            return fileName;
        } catch (e) {
            throw new HttpException('Произошла ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

}