import { create } from 'zustand';

interface AnimeQuery {
  genreId?: number;
  searchText?: string;
  sortOrder?:string;
}

interface AnimeQueryStore {
  animeQuery: AnimeQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useAnimeQueryStore = create<AnimeQueryStore>((set) => ({
    animeQuery: {sortOrder: "score"},
  setSearchText: (searchText) =>
    set((store) => ({ 
      animeQuery: { ...store.animeQuery, searchText} 
    })),
  setGenreId: (genreId) =>
    set((store) => ({
        animeQuery: { ...store.animeQuery, genreId},
    })),
    setSortOrder: (sortOrder) =>
    set((store) => ({
        animeQuery: { ...store.animeQuery, sortOrder },
    })),
}));


export default useAnimeQueryStore;
