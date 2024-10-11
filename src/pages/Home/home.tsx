import React, { useEffect, useState } from 'react';
import { fetchCelestialBodies } from '../../service/bringPlanetas';
import { useNavigate } from 'react-router-dom';
import { CelestialBody } from '../../types/planetasType'; 
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [bodies, setBodies] = useState<CelestialBody[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCelestialBodies();
      console.log(data);
      setBodies(data);
    };
    getData();
  }, []);

  const goToDetails = (id: string) => {
    navigate(`/cuerpo/${id}`, { state: { id } });
  };

  return (
    <div>
      <h1>Celestial Bodies</h1>
      <ul>
        {bodies.map((body) => (
          <li key={body.id}>
            {body.englishName} (Mass: {body.mass.massValue} x 10^{body.mass.massExponent})
            <button onClick={() => goToDetails(body.id)}>View Details</button>
          </li>
        ))}
      </ul>
      <Link to="/contact">Go to Contact Page</Link>
    </div>
  );
};

export default HomePage;


  