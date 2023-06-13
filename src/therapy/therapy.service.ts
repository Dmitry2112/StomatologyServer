import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Therapy} from "./therapy.model";
import {CreateTherapyDto} from "./dto/create-therapy.dto";

@Injectable()
export class TherapyService {
    constructor(@InjectModel(Therapy) private therapyRepository: typeof Therapy) {
    }

    async create(dto: CreateTherapyDto) {
        const therapy = await this.therapyRepository.create(dto)
        return therapy;
    }

}
