import React from 'react';
import { BookOpen, Target, Users, Rocket } from 'lucide-react';

const About = () => {
  return (
    <>
      {/* Intro Header */}
       <div className="text-center py-10 bg-gray-50">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">About ModernBlog</h1>
          <p className="text-gray-600">Learn more about our mission and story.</p>
       </div>

      {/* Our Story Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-8 md:flex md:items-center md:justify-between">
          {/* Left: Text Content */}
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              ModernBlog was founded with a simple mission: to create a platform where writers and readers can
              connect through powerful storytelling. We believe that every story matters and every voice deserves to be heard.
            </p>
            <p className="text-gray-700">
              Since our launch, we've been committed to fostering a community of passionate writers and curious readers
              who share knowledge, experiences, and inspiration.
            </p>
          </div>

          {/* Right: Icon and Tagline */}
          <div className="md:w-1/3 text-center mt-10 md:mt-0">
            <BookOpen className="w-16 h-16 text-blue-600 mx-auto" />
            <p className="text-sm text-gray-600 mt-2">Empowering stories since 2024</p>
          </div>
        </div>
      </section>

      {/* Mission / Community / Vision Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Mission */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <Target className="text-blue-600 w-6 h-6" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              To democratize storytelling and make quality content accessible to everyone.
            </p>
          </div>

          {/* Community */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-4 rounded-full">
                <Users className="text-green-600 w-6 h-6" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Community</h3>
            <p className="text-gray-600 text-sm">
              A diverse community of writers, readers, and thinkers from around the world.
            </p>
          </div>

          {/* Vision */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-4 rounded-full">
                <Rocket className="text-purple-600 w-6 h-6" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm">
              To be the leading platform for authentic, meaningful content and connections.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
