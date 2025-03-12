"use client"; // Ensures this is a Client Component

import Image from "next/image";
import Link from "next/link";

// Define topics for Physics simulations
const physicsTopics = [
  // { 
  //   title: "Unit & Dimension", 
  //   image: "/All_Images/Simulation_Images/Physics/Unit_Dimension.png", 
  //   link: "/simulations/physics/Unit_Dimension"
  // },
  { 
    title: "One Dimension Motion", 
    image: "/All_Images/Simulation_Images/Physics/One_Dimension_Motion.png", 
    link: "/simulations/physics/One_Dimension_Motion" 
  },
  { 
    title: "Projectile Motion", 
    image: "/All_Images/Simulation_Images/Physics/Projectile_Motion.png", 
    link: "/simulations/physics/Projectile_Motion" 
  },
  { 
    title: "Relative Motion", 
    image: "/All_Images/Simulation_Images/Physics/Relative_Motion.png", 
    link: "/simulations/physics/Relative_Motion" 
  },
  { 
    title: "Rain Person Problem", 
    image: "/All_Images/Simulation_Images/Physics/Rain_Person_Problem.png", 
    link: "/simulations/physics/Rain_Person_Problem" 
  },
  { 
    title: "Mass Block Motion", 
    image: "/All_Images/Simulation_Images/Physics/Mass_Block_Motion.png",  
    link: "/simulations/physics/Mass_Block_Motion" 
  },
  { 
    title: "Incline Plane Motion", 
    image: "/All_Images/Simulation_Images/Physics/Incline_Plane_Motion.png",  
    link: "/simulations/physics/Incline_Plane_Motion" 
  },
  { 
    title: "Pulley System", 
    image: "/All_Images/Simulation_Images/Physics/Pulley_System.png", 
    link: "/simulations/physics/Pulley_System" 
  },
  { 
    title: "Vernier Calipers", 
    image: "/All_Images/Simulation_Images/Physics/Vernier_Calipers.png", 
    link: "/simulations/physics/Vernier_Calipers" 
  },
];

// Main Physics Component
export default function Physics() {
  return <SubjectPage title="Physics" topics={physicsTopics} />;
}

interface Topic {
  title: string;
  image: string;
  link: string;
}

interface SubjectPageProps {
  title: string;
  topics: Topic[];
}

// Subject Page layout component for displaying the physics topics
function SubjectPage({ title, topics }: SubjectPageProps) {
  return (
    <div className="min-h-screen bg-gray-100 py-4">
      {/* Header Section */}
      <header className="bg-teal-600 text-white text-center py-4 text-3xl font-semibold mt-12 rounded-2xl">
        {title}
      </header>

      {/* Topics Section */}
      <div className="container mx-auto px-12 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-green-300 shadow-lg rounded-3xl py-4 px-0 transition-all duration-300 flex flex-col items-center"
            >
              {/* Image Section with Enhanced In-Out Hover Effect */}
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  width={300}
                  height={200}
                  className="rounded-xl transform transition-transform duration-500 ease-in-out scale-95 hover:scale-110"
                />
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold mt-4 text-center">{topic.title}</h2>

              {/* Explore Button */}
              <Link href={topic.link}>
                <button className="mt-4 bg-sky-700 text-white px-4 py-2 rounded-xl hover:bg-sky-500 transition duration-300 block mx-auto hover:text-black font-bold">
                  Explore
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
