import {Body, Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FilesService} from "./files.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {CreateFileDto} from "./dto/create-file.dto";

@Controller('files')
export class FilesController {
    constructor(private fileService: FilesService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    createFile(@Body() dto: CreateFileDto, @UploadedFile() file) {
        return this.fileService.create(dto, file)
    }
}
