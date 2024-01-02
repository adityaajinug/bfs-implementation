const property = {
  A1: {
    name: "Andi",
    color: "#FF7575",
  },
  A2: {
    name: "Julia",
    color: "#FF7575",
  },
  A3: {
    name: "Budi",
    color: "#FF7575",
  },
  A4: {
    name: "Neni",
    color: "#FF7575",
  },
  B1: {
    name: "Dani",
    color: "#FF5151",
  },
  B2: {
    name: "Siti",
    color: "#FF5151",
  },
  B3: {
    name: "Farhan",
    color: "#FF5151",
  },
  B4: {
    name: "Ayu",
    color: "#FF5151",
  },
  B5: {
    name: "Doni",
    color: "#FF5151",
  },
  B6: {
    name: "Ningsih",
    color: "#FF5151",
  },
  C1: {
    name: "Frendi",
    color: "#FFA7A7",
  },
  C2: {
    name: "Hendi",
    color: "#FFA7A7",
  },
  C3: {
    name: "Ratih",
    color: "#FFA7A7",
  },
  C4: {
    name: "Joko",
    color: "#FFA7A7",
  },
  D1: {
    name: "Mulyono",
    color: "#F40000",
  },
  D2: {
    name: "Suparti",
    color: "#F40000",
  },
  D3: {
    name: "Jajang",
    color: "#F40000",
  },
  D4: {
    name: "Endah",
    color: "#F40000",
  },
};
const graph = {
  A1: ["B3", "B4", "C1", "C2"],
  A2: ["B1", "B2", "C1", "C2"],
  A3: ["B5", "B6", "C3", "C4"],
  A4: ["C3", "C4"],
  B1: ["A2"],
  B2: ["B4", "D3", "D4"],
  B3: ["A1", "B6", "D1", "D2"],
  B4: ["A1", "B2", "D3", "D4"],
  B5: ["A3"],
  B6: ["A3", "B3", "D1", "D2"],
  C1: ["A1", "A2", "C2"],
  C2: ["A2", "A1", "C1"],
  C3: ["A3", "A4", "C4"],
  C4: ["A4", "A3", "C3"],
  D1: ["B3", "B6"],
  D2: ["B3", "B6"],
  D3: ["B2", "B4", "D1"],
  D4: ["B2", "B4"],
};

const searching = (graph, start, goal, property) => {
  const queue = [[start]];
  const visited = [];
  while (queue.length > 0) {
    const path = queue.shift();
    const state = path[path.length - 1];

    if (state === goal) {
      return path.map((code) => ({
        code,
        name: property[code].name,
        backgorund: property[code].color,
      }));
    } else if (!visited.includes(state)) {
      for (const neighbor of graph[state] || []) {
        const newPath = [...path, neighbor];
        queue.push(newPath);
      }
      visited.push(state);
    }

    if (queue.length === 0) {
      return null;
    }
  }
};

const resultElement = document.getElementById("result");
const startSelect = document.getElementById("start");
const goalSelect = document.getElementById("goal");
const findButton = document.getElementById("find-button");

findButton.addEventListener("click", (e) => {
  e.preventDefault();
  const startNode = startSelect.value;
  const goalNode = goalSelect.value;

  const resultPath = searching(graph, startNode, goalNode, property);
  if (resultPath) {
    resultElement.innerHTML = resultPath
      .map((item) => {
        return `<div class="card-person" style="background-color:${item.backgorund}">
              <h2>${item.name}</h2>
              <p>${item.code}</p>
            </div>`;
      })
      .join("");
  } else {
    resultElement.textContent = "Tidak ditemukan";
  }
});
