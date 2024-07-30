import { Injectable } from "@nestjs/common";
import { createMusicDto } from "./dto/create-music.dto";
import { updateMusicDto } from "./dto/update-music.dto";



@Injectable()
export class musicRepository {
    private readonly music = [];
}