'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import HeaderBox from '../../../components/HeaderBox';
import Calender from '../../../components/Calender';

// Define types for your Module, Course, and Quiz models
// interface Course {
//   _id: string;
//   name: string;
// }

// interface Quiz {
//   _id: string;
//   title: string;
// }

interface Module {
  _id: string;
  name: string;
  components: number[];
  orderNumber: number;
  course: string;
  quiz: string;
}

const ComponentArray = [<Calender />, <HeaderBox title='hlp' />];

const ModuleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the module ID from the route parameters
  const [module, setModule] = useState<Module | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const apiURL = process.env.NODE_ENV === 'production' ? process.env.PROD_SERVER_URL : process.env.DEV_SERVER_URL;

  useEffect(() => {
    const fetchModule = async () => {
      try {
        const response = await fetch(apiURL + `/api/v1/modules/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch module');
        }
        const data = await response.json();
        setModule(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch module');
        setLoading(false);
      }
    };

    fetchModule();
  }, [id]);

  if (loading) return <p>Loading module...</p>;
  if (error) return <p>{error}</p>;
  if (!module) return <p>Module not found</p>;

  return (
    <div>
        <h1 className=' text-white'>{module.name}</h1>
        <p className=' text-white'>Order: {module.orderNumber}</p>
        {module.components.map((component, index) => (
            <div key={index}>
                {ComponentArray[component]}
            </div>
        ))}
        <p className=' text-white'>Course: {module.course}</p>
        <p className=' text-white'>Quiz: {module.quiz}</p>
    </div>
  );
};

export default ModuleDetailPage;
