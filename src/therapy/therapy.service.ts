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

    async getAll() {
        const therapy = await this.therapyRepository.findAll({include: {all: true}});
        return therapy;
    }

    async getComplitedAppointment(userId: number) {
        const therapys = await this.therapyRepository.findAll({where: {userId: userId}, include: {all: true}});

    }

    async deleteTherapy(id: number) {
        return await this.therapyRepository.destroy({where: {id: id}})
    }

}
