import {Body, Controller, Post} from '@nestjs/common';
import {CreateTherapyDto} from "./dto/create-therapy.dto";
import {TherapyService} from "./therapy.service";

@Controller('therapy')
export class TherapyController {
    constructor(private  therapyService:  TherapyService) {
    }

    @Post()
    createTherapy(@Body() dto: CreateTherapyDto) {
        this.therapyService.create(dto)
    }

}
