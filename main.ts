import { series } from './data';

let table = document.getElementById("table-container");
if (table) {

  const tbody = document.createElement("tbody");
  series.forEach((serie) => {
    const tr = document.createElement("tr");
    const idCell = document.createElement("td");
    idCell.textContent = serie.id.toString();
    const link: HTMLAnchorElement = document.createElement("a");
    link.href = "#" + serie.id.toString();
    link.textContent = serie.title;
    
    link.addEventListener("click", (event: MouseEvent) => {
      event.preventDefault(); // Prevents the default link behavior
      const image = document.getElementById("image")  as HTMLImageElement;;
      const title = document.getElementById("title");
      const description = document.getElementById("description");
      const link = document.getElementById("link");
      if (image)
      image.src = serie.imageUrl;
      if (title)
      title.textContent = serie.title;
      if (description)
      description.textContent = serie.synopsis;
      if (link)
      link.textContent = serie.url;
  });
    
    const titleCell = document.createElement("td");
    titleCell.appendChild(link);
    const channelCell = document.createElement("td");
    channelCell.textContent = serie.channel;
    const seasonsCell = document.createElement("td");
    seasonsCell.textContent = serie.seasons.toString();
    tr.appendChild(idCell);
    tr.appendChild(titleCell);
    tr.appendChild(channelCell);
    tr.appendChild(seasonsCell);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);


  const average = document.getElementById("average");
  if (average) {
      if (average.textContent) {
          average.innerText = getAverage(series).toString(); 
      }
  }
}
function getAverage(series: any[]) {
    let suma = 0;
    let counter = 0;
    series.forEach((serie) => {
        suma = suma + serie.seasons;
        counter= counter+1;
    })
    let promedio = suma / counter;
    return promedio;
}