function shoppingList(input) {
    let shoppingItemsSet = new Set();
    let itemList = input.shift();
    let itemArr = itemList.split("!");

    itemArr.forEach(item => {
        shoppingItemsSet.add(item);
    });

    let command = input.shift();

    while (command !== "Go Shopping!") {
        let commandParts = command.split(" ");
        let commandType = commandParts[0];

        switch (commandType) {
            case "Urgent":
                let urgentItem = commandParts[1];

                if (!shoppingItemsSet.has(urgentItem)) {
                    let arr = [...shoppingItemsSet];
                    arr.unshift(urgentItem);
                    shoppingItemsSet = new Set(arr);
                }
                break;
            case "Unnecessary":
                let itemToRemove = commandParts[1];

                if (shoppingItemsSet.has(itemToRemove)) {
                    shoppingItemsSet.delete(itemToRemove);
                }
                break;
            case "Correct":
                let oldItem = commandParts[1];
                let newItem = commandParts[2];

                if (shoppingItemsSet.has(oldItem)) {
                    let arr = [...shoppingItemsSet];

                    for (let index = 0; index < arr.length; index++) {
                        if (oldItem === arr[index]) {
                            arr[index] = newItem;
                        }
                    }
                    shoppingItemsSet = new Set(arr);
                }
                break;
            case "Rearrange":
                let itemToRearrange = commandParts[1];

                if (shoppingItemsSet.has(itemToRearrange)) {
                    shoppingItemsSet.delete(itemToRearrange);
                    shoppingItemsSet.add(itemToRearrange);
                }
                break;
        }

        command = input.shift();
    }

    console.log([...shoppingItemsSet].join(", "));
}

shoppingList((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
);