export interface Anime {
    mal_id: number;
    url: string;
    images: AnimeImages;
    trailer: AnimeTrailer;
    approved: boolean;
    titles: Title[];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: Aired;
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string | null;
    season: string | null;
    year: number | null;
    broadcast: {
      day: string | null;
      time: string | null;
      timezone: string | null;
      string: string | null;
    };
    producers: Producer[];
    licensors: Producer[];
    studios: Producer[];
    genres: Genre[];
    explicit_genres: Genre[];
    themes: Genre[];
    demographics: Genre[];
  }


interface AnimeImage {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  }
  
  interface AnimeImages {
    jpg: AnimeImage;
    webp: AnimeImage;
  }
  
  interface TrailerImages {
    image_url: string | null;
    small_image_url: string | null;
    medium_image_url: string | null;
    large_image_url: string | null;
    maximum_image_url: string | null;
  }
  
  interface AnimeTrailer {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
    images: TrailerImages;
  }
  
  interface Title {
    type: string;
    title: string;
  }
  
  interface AiredProp {
    day: number | null;
    month: number | null;
    year: number | null;
  }
  
  interface Aired {
    from: string;
    to: string | null;
    prop: {
      from: AiredProp;
      to: AiredProp;
    };
    string: string;
  }
  
  interface Producer {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  
  export interface Genre {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }