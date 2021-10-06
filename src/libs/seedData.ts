import UserRepository from '../repositories/user/UserRepository';
import { BCRYPT_SALT_ROUNDS } from './constant';
import * as bcrypt from 'bcrypt';
import configuration from '../config/configuration';
import ReviewerRepository from '../repositories/reviewer/ReviwerRepository';



const userRepository: UserRepository = new UserRepository();
const seedData1 = async () => {
    const res = await userRepository.count();
    
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
    }
    const seedData2 = async() => {
        const reviewerRepository: ReviewerRepository = new ReviewerRepository();
        const res = await reviewerRepository.count();
        console.log('No Of Record:', res );
        if ( res === 0) {
            console.log('Data seeding in progrss....');
            const hash = await bcrypt.hash(configuration.pass, BCRYPT_SALT_ROUNDS)
                const seedData = [
                {
                    name: 'Krishna Nichal',
                    role: 'reviewer',
                    email: 'krishna.nichal@successive.tech',
                    password: hash
                },
                {
                    name: 'Deepak Gaikwad',
                    role: 'trainee',
                    email: 'deepak.gaikwad@successive.tech',
                    password: hash,
                    feedBack: [{
                        Attendance: {
                            Leaves: '',
                            Late_Arrivals:'' ,
                        },
                        Reveiwer: {
                            Code_Quality: '9',
                            Communication: '8',
                            Behaviour: '8',
                            Tasks_Delivery:'7' ,
                            Comprehension: '8',
                            Email_Communication:'10' ,
                            Redmine:'9',
                        },
                        Description: {
                            Good_Points: 'Communication',
                           Improvement_Required: 'code optimize'
    
    }
        }]
    }
];
    
            seedData.forEach(async reviewer => {
                await reviewerRepository.create(reviewer);
            });
        }
    };
    
    export { seedData1, seedData2 };



    

    


