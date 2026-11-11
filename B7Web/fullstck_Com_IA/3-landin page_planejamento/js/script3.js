let punctuation = 0;

let febre = confirm('Tem febre?');
let tosse = confirm('Tem tosse?');
let sangue = confirm('Tem sangue?');

if (febre === true) {
    punctuation = punctuation + 1;
}

if (tosse === true) {
    punctuation = punctuation + 1;
}

if (sangue === true) {
    punctuation = punctuation + 1;
}

if (punctuation >= 2) {
    console.log('Urgência');
} else {
    console.log('Normal');
}