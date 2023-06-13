import {Body, Controller, Get, Post} from '@nestjs/common';
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

}
