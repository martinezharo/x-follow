const people = [
    {
        name: "Gracie Abrams",
        username: "gracieabrams",
        img: "https://images.ecestaticos.com/FHMwU_9LbV3iEeo2zFVAo8tGtcw=/47x0:2215x1626/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F091%2Fd78%2F8f2%2F091d788f2f1e367b6a0eee6b48580288.jpg"
    },
    {
        name: "Oliver Martínez",
        username: "martinezharo",
        img: "https://olivermartinezharo.com/icon.svg"
    },
    {
        name: "Fernando Alonso",
        username: "alo14",
        img: "https://cdn-7.motorsport.com/images/mgl/0ZRQbbN0/s800/fernando-alonso-aston-martin-r.jpg"
    },
    {
        name: "Marcus Aurelius",
        username: "maurelius",
        img: "https://img.freepik.com/fotos-premium/retrato-estoico-marco-aurelio-pelicula-blanco-negro-grano-obra-maestra-muy-detallada_1097265-29435.jpg?w=360"
    },
    {
        name: "Olivia Rodrigo",
        username: "olivia_rdrg",
        img: "https://hips.hearstapps.com/hmg-prod/images/olivia-rodrigo-deja-vu-1617092938.jpg?crop=1.00xw:0.913xh;0,0.0102xh&resize=1200:*"
    }
]

const container = document.querySelector(".container");

const HTML = people.map((person) =>
    `<div class="card">
    <div class="userdata">
      <img src="${person.img}">
      <span class="names-container">
      <div class="name">
        ${person.name}
      </div>
      <div class="username">
        @${person.username}
      </div>
    </span>
    </div>
    <button class="follow">
    </button>
  </div>`
).join("")

container.innerHTML = HTML;

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("follow")) {
        e.target.classList.toggle('following')
    }
})

