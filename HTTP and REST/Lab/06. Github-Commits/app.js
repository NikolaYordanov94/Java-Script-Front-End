function loadCommits() {
    const BASE_URL = "https://api.github.com/repos/";
    const usernameValue = document.getElementById("username").value;
    const repoValue = document.getElementById("repo").value;
    const commits = document.getElementById("commits");

    fetch(`${BASE_URL}${usernameValue}/${repoValue}/commits`)
        .then((res) => res.json())
        .then((data) => {
            data.
                forEach(({ commit }) => {
                    const newLiElement = document.createElement("li");
                    newLiElement.textContent = `${commit.author.name}: ${commit.message}`;
                    commits.appendChild(newLiElement);
                });
        })
        .catch((err) => {
            console.error(err);
        })
}