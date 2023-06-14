import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {CreateTherapyDto} from "./dto/create-therapy.dto";
import {TherapyService} from "./therapy.service";

@Controller('therapy')
export class TherapyController {
    constructor(private  therapyService:  TherapyService) {
    }

    @Post()
    createTherapy(@Body() dto: CreateTherapyDto) {
        return this.therapyService.create(dto)
    }

    @Get()
    getAll() {
        return this.therapyService.getAll()
    }

    @Delete(':id')
    deleteTherapy(@Param('id') id: number) {
        return this.therapyService.deleteTherapy(id)
    }

}
