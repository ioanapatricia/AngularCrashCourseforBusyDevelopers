function doSomething() {
    for (var i = 0; i<5; i++) {
        console.log(i);
    }

    console.log('Finally: ' + i);
}

function doSomethingElse() {
    for (let i = 0; i<5; i++) {
        console.log(i);
    }

    console.log('Finally: ' + i);
}

doSomething();
doSomethingElse()
