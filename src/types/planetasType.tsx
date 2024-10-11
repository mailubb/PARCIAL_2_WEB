export interface CelestialBody {
    id: string;
    name: string;
    englishName: string;
    mass: {
      massValue: number;
      massExponent: number;
    };
  }

  