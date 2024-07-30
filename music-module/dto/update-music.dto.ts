import { PartialType } from "@nestjs/mapped-types";
import { createMusicDto } from "./create-music.dto";

export class updateMusicDto extends PartialType (createMusicDto) {}