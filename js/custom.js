const loadAllData = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displayTools(data.data.tools));
};

const displayTools = (data) => {
  console.log(data);

  const cardsContainer = document.getElementById("card-container");
  cardsContainer.innerHTML = "";
  data.forEach((tool) => {
    const div = document.createElement("div");
    div.classList.add("col-sm-4");
    div.innerHTML = `
      
                    <div class="card">
                      <img src="${tool.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${tool.name}</h5>
                            <p class="card-text">${tool.description}</p>
                        </div>
                        <div class="card-body d-flex justify-content-between">
                        <a href="#" class="card-link">Card link</a>
                        <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">-></a>
                      </div>
                    </div>
                    
      `;
    cardsContainer.appendChild(div);
  });
};

loadAllData();