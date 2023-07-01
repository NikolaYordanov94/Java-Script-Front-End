function loadRepos() {
	const BASE_URL = "https://api.github.com/users/";
	const usernameValue = document.getElementById("username").value;
	const reposList = document.getElementById("repos");

	fetch(`${BASE_URL}${usernameValue}/repos`, { method: "GET" })
		.then((res) => res.json())
		.then((data) => {
			reposList.innerHTML = "";
			data
				.forEach(repo => {
					let name = repo.full_name;
					let url = repo.html_url;

					const newLiElement = document.createElement("li");
					const newAnchorElement = document.createElement("a");
					newAnchorElement.textContent = name;
					newAnchorElement.href = url;

					newLiElement.appendChild(newAnchorElement);
					reposList.append(newLiElement);
				});
		})
		.catch((err) => {
			console.error(err);
		})
}