export class Serie {
    id: number;
    title: string;
    channel: string;
    seasons: number;
    synopsis: string;
    url: string;
    imageUrl: string;
  
    constructor(
      id: number,
      title: string,
      channel: string,
      seasons: number,
      synopsis: string,
      url: string,
      imageUrl: string
    ) {
      this.id = id;
      this.title = title;
      this.channel = channel;
      this.seasons = seasons;
      this.synopsis = synopsis;
      this.url = url;
      this.imageUrl = imageUrl;
    }
  }
  