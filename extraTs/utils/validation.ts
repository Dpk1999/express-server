import { EmailType } from '../interface';
import { validateEmail } from './helper';

const validEmails: string[] = [];
const invalidEmails: string[] = [];


const validateUsers = (users: EmailType[]) => {

    users.map((user) => {
        const {traineeEmail, reviewerEmail} = user;
        if(validateEmail(traineeEmail)){ validEmails.push(traineeEmail) }else{invalidEmails.push(traineeEmail)};
        if(validateEmail(reviewerEmail)){  validEmails.push(reviewerEmail)}
else{  invalidEmails.push(reviewerEmail)};
    });

    console.log('Valid Emails Count = ' + validEmails.length.toString() + '\n');
    validEmails.map(e => (console.log(e + '\n')));
    console.log('\n');
    console.log('Invalid Emails Count = ' + invalidEmails.length.toString() + '\n');
    invalidEmails.map(e => (console.log(e + '\n')));

};
export default validateUsers;