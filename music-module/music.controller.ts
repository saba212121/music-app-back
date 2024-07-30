import { Controller, Delete, Get, Put } from "@nestjs/common";


@Controller('music')

export class MusicController {

    @Get()
    async getMusic () {
        return 'music'
    }

    @Put()
    update() {
        return 'add to music'
    }

    @Delete() 
    remove() {
        return 'remove music'
    }
}