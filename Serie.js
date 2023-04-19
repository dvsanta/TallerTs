"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
var Serie = /** @class */ (function () {
    function Serie(id, title, channel, seasons, synopsis, url, imageUrl) {
        this.id = id;
        this.title = title;
        this.channel = channel;
        this.seasons = seasons;
        this.synopsis = synopsis;
        this.url = url;
        this.imageUrl = imageUrl;
    }
    return Serie;
}());
exports.Serie = Serie;
