import { Injectable } from "@nestjs/common";
import { createMusicDto } from "./dto/create-music.dto";
import { updateMusicDto } from "./dto/update-music.dto";
import { musicRepository } from "./music.repository";
@Injectable()
export class MusicService{

    constructor(private readonly MusicRepo:musicRepository) {}

    create(createMusicDto:createMusicDto) {
        return this.MusicRepo.create(createMusicDto);
    }
}