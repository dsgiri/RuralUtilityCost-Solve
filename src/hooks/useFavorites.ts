import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const item = window.localStorage.getItem('solve_favorites');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.warn('Error reading localStorage', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('solve_favorites', JSON.stringify(favorites));
    } catch (error) {
      console.warn('Error writing localStorage', error);
    }
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(f => f !== id) 
        : [...prev, id]
    );
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return { favorites, toggleFavorite, isFavorite };
}
