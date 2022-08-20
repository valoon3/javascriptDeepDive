
const condition = true;

const promise = new Promise((resolve, reject) => {
    if(condition) {
        resolve('성공');
    }
    else {
        reject('실패');
    }
});

promise
    .then((message) => {
        console.log('message: ' + message);
        return '끝';
    })
    .catch((message) => {
        console.log('message: ' + message);
    })
    .finally((message) => {
        console.log('message: ' + message)
    });