import {Body, Controller, Post} from '@nestjs/common';
import {ServicesService} from "./services.service";
import {CreateServicesDto} from "./dto/create-services.dto";

@Controller('services')
export class ServicesController {
    constructor(private serviceService: ServicesService) {
    }

    @Post()
    createService(@Body() dto: CreateServicesDto) {
        return this.serviceService.create(dto)
    }
}
