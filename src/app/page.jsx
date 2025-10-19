import { Brackets, Code2, Layers, NotebookPen } from "lucide-react";

export default function Home() {
  return (
    <div className="px-4 md:px-10 lg:px-16 py-6 md:py-10 lg:py-12">
      <div className="about">
        <div className="title flex items-center mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold mr-4">About Me</h2>
          <span className="bg-[#ED250A] w-32 md:w-48 lg:w-60 h-[3px] block rounded-full"></span>
        </div>
        <div className="text mb-8">
          <p className="text-sm md:text-base lg:text-lg leading-relaxed dark:text-gray-300 text-gray-700">
            Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
            full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
            My journey in the world of web development has been exhilarating, and I constantly strive to
            enhance my skills and embrace emerging trends in the industry.
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">What I Do!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/** Card 1 **/}
          <div className="bg-[#FFEBD1] text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
            <div className="flex items-center mb-3">
              <span className="text-[#ED250A] text-2xl"><Code2 /></span>
              <h3 className="font-semibold text-xl ml-2">Front-End Development</h3>
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              I specialize in creating dynamic and responsive user interfaces using NEXT.js & React.js,
              ensuring seamless and engaging web experiences.
            </p>
          </div>
          {/** Card 2 **/}
          <div className="bg-[#F2F7FC] text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
            <div className="flex items-center mb-3">
              <span className="text-[#ED250A] text-2xl"><Brackets /></span>
              <h3 className="font-semibold text-xl ml-2">Backend Development</h3>
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              With expertise in Node.js & Express.js, I build secure, scalable, and high-performance
              APIs, optimizing backend logic and database management.
            </p>
          </div>
          {/** Card 3 **/}
          <div className="bg-[#F2F7FC] text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
            <div className="flex items-center mb-3">
              <span className="text-[#ED250A] text-2xl"><Layers /></span>
              <h3 className="font-semibold text-xl ml-2">Full Stack Development</h3>
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              As a MERN full-stack developer, I integrate MongoDB, Express.js, React.js, and Node.js
              to build powerful and seamless web applications.
            </p>
          </div>
          {/** Card 4 **/}
          <div className="bg-[#FFEBD1] text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
            <div className="flex items-center mb-3">
              <span className="text-[#ED250A] text-2xl"><NotebookPen /></span>
              <h3 className="font-semibold text-xl ml-2">Mentorship</h3>
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              Passionate about sharing knowledge, I mentor aspiring developers, helping them grow
              and excel in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}