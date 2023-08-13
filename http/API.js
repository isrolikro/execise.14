const createCardButton = document.getElementById("create-card");
createCardButton.onclick = showRandomUser;
const personContainer = document.querySelector("#personContainer");

async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  console.log(data);
  return data.results[0];
}

async function createCard(user) {
  console.log(user);
  const {
    name: { first },
    email,
    age,
    picture: { large },
  } = user;

  personContainer.innerHTML = "";
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.style.width = "18rem";

  const cardImage = document.createElement("img");
  cardImage.src = large;
  cardImage.className = "card-img-top";
  cardImage.alt = `image of ${first}`;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = first;

  const cardAge = document.createElement("p");
  cardAge.className = "card-text";
  cardAge.textContent = age;

  const cardEmail = document.createElement("p");
  cardEmail.className = "card-text";
  cardEmail.textContent = email;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardAge);
  cardBody.appendChild(cardEmail);

  cardDiv.appendChild(cardImage);
  cardDiv.appendChild(cardBody);

  personContainer.appendChild(cardDiv);
}
async function showRandomUser() {
  const user = await getRandomUser();
  createCard(user);
}

// 2;
const createFiveMenCardsButton = document.getElementById("create-MenCard");
createFiveMenCardsButton.onclick = RandomUser;

async function RandomUser() {
  const User = await getRandomUser();
  createCard(User);
}
