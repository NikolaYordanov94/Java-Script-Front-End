function loadingBar(num) {
    let loadingBar = "[..........]";
    loadingBar = loadingBar.replace(".".repeat(num / 10), "%".repeat(num / 10));

    if (num === 100) {
        console.log("100% Complete!");
        console.log(loadingBar);
    } else {
        console.log(`${num}% ${loadingBar}`)
        console.log("Still loading...");
    }
}


loadingBar(30);
loadingBar(50);
loadingBar(100);