let userName = prompt('Enter your name:');
let userSurname = prompt('Enter your surname:');
let userEmail = prompt('Enter your email:');
let userYear = prompt('Enter your birth year:');

function trimSpaces(str){
    return str.trim().replace(/\s+/g, ' ').replace(/-\s+/g, '-').replace(/\s+-/g, '-');
}

function capitalizeChars(str){
    return str.replace(/(^|\s|-)([a-zа-яёїієґ])/gi, function(match, separator, char) {
        return separator + char.toUpperCase();
    });
}

function checkEmail(email){
    email = email.replace(/\s+/g, '').toLowerCase();
    if(!email.includes('@')){
        return `not valid email <b>${email}</b> (symbol @ not exist)`;
    } else if(email.indexOf('@') === 0){
        return `not valid email <b>${email}</b> (symbol @ find in first place)`;
    } else if(email.indexOf('@') === email.length - 1){
        return `not valid email <b>${email}</b> (symbol @ find in last place)`;
    } else {
        let emailWords = email.split('@');
        console.log(emailWords);
        if(emailWords[0].includes('.')){
            return `not valid email <b>${email}</b> (invalid username)`;
        } else if(!emailWords[1].includes('.') || emailWords[1].includes('.') === emailWords[1].length - 1){
            return `not valid email <b>${email}</b> (invalid domain)`;
        }
    }
    return email;
}

function verifyAge(year){
    year = year.replace(/\s+/g, '');
    let currentYear = new Date().getFullYear();
    if(year < 1900 || year > currentYear){
        return 'Invalid year';
    }
    return currentYear - year;
}

userName = trimSpaces(userName);
userName = capitalizeChars(userName);

userSurname = trimSpaces(userSurname);
userSurname = capitalizeChars(userSurname);

userEmail = checkEmail(userEmail);

userYear = trimSpaces(userYear);

const userAge = verifyAge(userYear);

document.write(`
    <ul>
        <li>
            <span>Full name</span>:&nbsp;<span>${userName} ${userSurname}</span>
        </li>
        <li>
            <span>Email</span>:&nbsp;<span>${userEmail}</span>
        </li>
        <li>
            <span>Age</span>:&nbsp;<span>${userAge}</span>
        </li>
    </ul>
`);