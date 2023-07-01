function getInfo() {
    const stopIdValue = document.getElementById("stopId").value;
    const stopName = document.getElementById("stopName");
    const busesList = document.getElementById("buses");
    const BASE_URL = "http://localhost:3030/jsonstore/bus/businfo/";

    busesList.innerHTML = "";
    fetch(`${BASE_URL}${stopIdValue}`, { method: "GET" })
        .then((res) => res.json())
        .then((busStopInfo) => {
            const name = busStopInfo.name;
            const busNums = busStopInfo.buses;
            stopName.textContent = name;
            for (const number in busNums) {
                const newLiElement = document.createElement("li");
                newLiElement.textContent = `Bus ${number} arrives in ${busNums[number]} minutes`;
                busesList.appendChild(newLiElement);
            }
        })
        .catch((err) => {
            stopName.textContent = "Error";
        });
}