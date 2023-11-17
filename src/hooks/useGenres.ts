import useData from './useData';

// Custom Hook for getting the different Genres

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres;
