import { useState, useEffect } from 'react';
import { fetchCelestialBodies } from '../service/bringPlanetas';
import { CelestialBody } from '../types/planetasType';

export const useCelestialBodies = () => {
  const [data, setData] = useState<CelestialBody[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchCelestialBodies();
        setData(result.bodies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return { data, loading, error };
};
