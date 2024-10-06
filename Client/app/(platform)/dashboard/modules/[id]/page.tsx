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
  components: string[];
  orderNumber: number;
  course: string;
  quiz: string;
}

const ModuleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the module ID from the route parameters
  const [module, setModule] = useState<Module | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchModule = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/v1/modules/${id}`);
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
                {component === 'Calendar' ? <Calender /> : <div className=' text-white'></div>}
                {component === 'HeaderBox' ? <HeaderBox title="HelloWorld" /> : <div className=' text-white'></div>}
            </div>
        ))}
        <p className=' text-white'>Course: {module.course}</p>
        <p className=' text-white'>Quiz: {module.quiz}</p>
    </div>
  );
};

export default ModuleDetailPage;
