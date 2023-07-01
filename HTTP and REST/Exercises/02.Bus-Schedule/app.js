function solve() {
    const textInfo = document.getElementsByClassName("info")[0];
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");
    const BASE_URL = "http://localhost:3030/jsonstore/bus/schedule/";
    let currentStop = "depot";
    let stopName = "";

    function depart() {
        departBtn.disabled = true;
        arriveBtn.disabled = false;

        fetch(`${BASE_URL}${currentStop}`, { method: "GET" })
            .then((res) => res.json())
            .then((stopInfo) => {
                let currentStopName = stopInfo.name;
                textInfo.textContent = `Next stop ${currentStopName}`;
                stopName = currentStopName;
                currentStop = stopInfo.next;
            })
            .catch((err) => {
                textInfo.textContent = "Error";
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            });
    }

    async function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;

        try {
            textInfo.textContent = `Arriving at ${stopName}`;
        } catch {
            textInfo.textContent = "Error";
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();