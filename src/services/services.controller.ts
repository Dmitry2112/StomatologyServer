import {Body, Controller, Delete, Param, Post} from '@nestjs/common';
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

    @Delete(':id')
    deleteService(@Param('id') id: number) {
        return this.serviceService.deleteService(id)
    }

}
