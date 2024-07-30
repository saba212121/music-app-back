import { Injectable } from "@nestjs/common";


@Injectable()
export class MusicService{

    constructor(private readonly MusicRepository:MusicRepository) {}

    create(createMusicDto:CreateMusicDto) {
        return this.MusicRepository.create(createMusicDto)
    }
}