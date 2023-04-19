"use strict";

import { series as _series } from "./data.js";
console.log(_series);
var table = document.getElementById("table-container");
if (table) {
    var tbody_1 = document.createElement("tbody");
    _series.forEach(function (serie) {
        var tr = document.createElement("tr");
        var idCell = document.createElement("td");
        idCell.textContent = serie.id.toString();
        var link = document.createElement("a");
        link.href = "#" + serie.id.toString();
        link.textContent = serie.title;
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevents the default link behavior
            var image = document.getElementById("image");
            ;
            var title = document.getElementById("title");
            var description = document.getElementById("description");
            var link = document.getElementById("link");
            if (image)
                image.src = serie.imageUrl;
            if (title)
                title.textContent = serie.title;
            if (description)
                description.textContent = serie.synopsis;
            if (link)
                link.textContent = serie.url;
        });
        var titleCell = document.createElement("td");
        titleCell.appendChild(link);
        var channelCell = document.createElement("td");
        channelCell.textContent = serie.channel;
        var seasonsCell = document.createElement("td");
        seasonsCell.textContent = serie.seasons.toString();
        tr.appendChild(idCell);
        tr.appendChild(titleCell);
        tr.appendChild(channelCell);
        tr.appendChild(seasonsCell);
        tbody_1.appendChild(tr);
    });
    table.appendChild(tbody_1);
    var average = document.getElementById("average");
    if (average) {
        if (average.textContent) {
            average.innerText = getAverage(_series).toString();
        }
    }
}
function getAverage(series) {
    var suma = 0;
    var counter = 0;
    series.forEach(function (serie) {
        suma = suma + serie.seasons;
        counter = counter + 1;
    });
    var promedio = suma / counter;
    return promedio;
}
