import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Service} from "./services.model";
import {CreateServicesDto} from "./dto/create-services.dto";

@Injectable()
export class ServicesService {
    constructor(@InjectModel(Service) private serviceRepository: typeof Service) {
    }

    async create(dto: CreateServicesDto) {
        const service = await this.serviceRepository.create(dto)
        return service;
    }

    async deleteService(id: number) {
        return await this.serviceRepository.destroy({where: {id: id}})
    }
}
