import UserRepository from '../repositories/user/UserRepository';
import { BCRYPT_SALT_ROUNDS } from './constant';
import * as bcrypt from 'bcrypt';
import configuration from '../config/configuration';


const userRepository: UserRepository = new UserRepository();
export default async () => {
    const res = await userRepository.count();
    try {
        console.log('res', res);
        if (res === 0) {
            const hash = await bcrypt.hash(configuration.pass, BCRYPT_SALT_ROUNDS)
            console.log('Data seeding in progress');
            userRepository.create(
                {
                    name: 'Head-Trainer',
                    role: 'head-trainer',
                    email: 'headtrainer@successive.tech',
                    password: hash
                }
            );
            userRepository.create(
                {
                    name: 'Trainer',
                    role: 'trainer',
                    email: 'trainer@successive.tech',
                    password: hash
                }
            );
        }



    } catch (error) {
        console.log("error", error);

    }

}