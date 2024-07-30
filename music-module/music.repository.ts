import { Injectable } from "@nestjs/common";
import { createMusicDto } from "./dto/create-music.dto";
import { updateMusicDto } from "./dto/update-music.dto";



@Injectable()
export class musicRepository {
    create(createMusicDto: createMusicDto) {
        throw new Error("Method not implemented.");
    }
    private readonly music = [];
}