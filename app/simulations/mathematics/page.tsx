import Image from "next/image";
import Link from "next/link";

const mathsTopics = [
  { 
    title: "Quadratic Equation", 
    image: "/All_Images/Simulation_Images/Mathematics/Quadratic_Equation.png", 
    link: "/simulations/mathematics/Quadratic_Equation" 
  },

  // Add more topics here
];

export default function Maths() {
  return <SubjectPage title="Mathematics" topics={mathsTopics} />;
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
              {/* Image Section with In-Out Hover Effect */}
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
