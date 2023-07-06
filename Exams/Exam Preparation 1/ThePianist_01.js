function thePianist(input) {
    let initialPieces = input.shift();
    let collectionOfPieces = {};

    for (let index = 0; index < initialPieces; index++) {
        let currentPiece = input[index].split("|");
        let [piece, composer, key] = currentPiece;

        let pieceObj = { piece, composer, key };
        collectionOfPieces[piece] = pieceObj;
    }

    let newInput = input.slice(initialPieces, input.length);

    let command = newInput.shift();

    while (command != "Stop") {
        let commandParts = command.split("|");
        let typeOfCommand = commandParts[0];

        switch (typeOfCommand) {
            case "Add":
                let [_typeOfCommand, piece, composer, key] = commandParts;
                let currentPieceObj = { piece, composer, key };

                if (collectionOfPieces.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                    collectionOfPieces[piece] = currentPieceObj;
                }

                break;
            case "Remove":
                let pieceForRemove = commandParts[1];

                if (collectionOfPieces.hasOwnProperty(pieceForRemove)) {
                    console.log(`Successfully removed ${pieceForRemove}!`);
                    delete collectionOfPieces[pieceForRemove];
                } else {
                    console.log(`Invalid operation! ${pieceForRemove} does not exist in the collection.`);
                }
                break;
            case "ChangeKey":
                let pieceToChangeKey = commandParts[1];
                let newKey = commandParts[2];

                if (collectionOfPieces.hasOwnProperty(pieceToChangeKey)) {
                    console.log(`Changed the key of ${pieceToChangeKey} to ${newKey}!`);
                    collectionOfPieces[pieceToChangeKey].key = newKey;
                } else {
                    console.log(`Invalid operation! ${pieceToChangeKey} does not exist in the collection.`)
                }
                break;
        }

        command = newInput.shift();
    }

    let pieces = Object.values(collectionOfPieces);

    for (const pieceObject of pieces) {
        console.log(`${pieceObject.piece} -> Composer: ${pieceObject.composer}, Key: ${pieceObject.key}`);
    }
}


thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
);