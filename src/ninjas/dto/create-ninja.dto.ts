import { MinLength, IsEnum } from 'class-validator';
import { NinjaWeapon } from '../types';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['stars', 'nunchucks'], { message: 'Use correct weapon!' })
  weapon: NinjaWeapon;
}
