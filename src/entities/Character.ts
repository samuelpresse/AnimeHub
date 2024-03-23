// Models.ts
 interface ImageUrls {
    image_url: string;
    small_image_url?: string;
  }
  
   interface CharacterDetails {
    mal_id: number;
    url: string;
    images: {
      jpg: ImageUrls;
      webp: ImageUrls;
    };
    name: string;
  }
  
  export interface Character {
    character: CharacterDetails;
    role: string;
    favorites: number;
  }
  