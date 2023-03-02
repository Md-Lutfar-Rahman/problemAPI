const loadAllData = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => displayTools(data.tools));
  };

  const displayTools = (data) => {
    console.log(data);

    const cardsContainer = document.getElementById("card-container");
    cardsContainer.innerHTML = "";
    data.forEach((tool) => {
      const div = document.createElement("div");
      div.classList.add("col");
     div.innerHTML = `
        <div class="card h-100">
          <img class="img-thumbnail" src="${tool.image}" alt="Tool Image">
          <div class="card-body">
            <h5 class="card-title">${tool.name}</h5>
            <p class="card-text">${tool.description}</p>
            <a href="#" class="btn btn-primary">View Tool</a>
          </div>
        </div>
      `;
      cardsContainer.appendChild(div);
    });
  };

  loadAllData();