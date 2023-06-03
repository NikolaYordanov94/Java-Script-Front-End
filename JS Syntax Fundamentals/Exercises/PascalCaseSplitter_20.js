function pascalCaseSplitter(text) {
    let str = "";
    str = text.replace(/([A-Z])/g, ', $1');
    console.log(str.slice(2));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');