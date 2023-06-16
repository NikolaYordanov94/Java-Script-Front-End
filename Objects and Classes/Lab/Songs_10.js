function songsFunc(input) {
    let iterations = Number(input[0]);
    let matchingSong = input[input.length - 1];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let index = 1; index <= iterations; index++) {
        let [typeList, name, time] = input[index].split("_");
        let songObj = new Song(typeList, name, time);

        if (matchingSong === "all") {
            console.log(name);
        } else {
            if (typeList === matchingSong) {
                console.log(name);
            }
        }
    }
}

songsFunc([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);

songsFunc([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);