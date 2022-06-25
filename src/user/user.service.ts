import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) {}

  async register(userId: string) {
    const existUser = await this.checkExistUser(userId);
    if (existUser) {
      throw new UnprocessableEntityException('이미 존재하는 아이디입니다.');
    }

    const user = new UserEntity();
    user.user_id = userId;

    return this.usersRepository.save(user);
  }

  async login(userId: string) {
    const res = await this.findOne(userId);

    if (res === null) {
      throw new UnprocessableEntityException('존재하지 않는 아이디입니다.');
    }

    return res;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(userId: string) {
    return this.usersRepository.findOne({
      where: { user_id: userId },
    });
  }

  private async checkExistUser(userId: string) {
    const user = await this.findOne(userId);
    return user !== null;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
