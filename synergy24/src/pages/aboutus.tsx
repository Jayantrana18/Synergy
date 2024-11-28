import React from "react";

const About = () => {
  const teamMembers = [
    {
      name: "Jayant Rana",
      role: "Project Manager",
      image: "/images/team/jayant.png", // Replace with actual image path
      description:
        "Overseeing the entire project and ensuring timely delivery with effective coordination.",
    },
    {
      name: "Thammisetty Venkata Dhruvil ",
      role: "Pseudocode Formulator & Learning Technology Lead",
      image: "/images/team/dhruvil.png", // Replace with actual image path
      description:
        "Specializing in formulating pseudocode and leading the learning technology strategy.",
    },
    {
      name: "Pranjal Singh Koranga",
      role: "Code Developer",
      image: "/images/team/pranjal.png", // Replace with actual image path
      description:
        "Designing and developing robust code for the application, ensuring scalability and security.",
    },
    {
      name: "Sujal Kishore",
      role: "UI/UX Designer & Learning Technology Lead",
      image: "/images/team/sujal.png", // Replace with actual image path
      description:
        "Crafting intuitive and user-friendly interfaces while guiding learning technology implementations.",
    },
    {
      name: "Mannat Muthreja",
      role: "Software Deployer",
      image: "/images/team/mannat.png", // Replace with actual image path
      description:
        "Deploying the software to production environments, ensuring smooth operations and minimal downtime.",
    },
    {
      name: "Kandunuri Tharun Sai",
      role: "Hardware Integrator",
      image: "/images/team/tharun.png", // Replace with actual image path
      description:
        "Integrating hardware solutions to optimize performance and enhance system capabilities.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-teal-50 to-teal-100 py-24 px-8">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="text-4xl font-extrabold text-teal-700 mb-8">
          Meet Our <span className="text-teal-500">Amazing Team</span>
        </h2>
        <p className="text-lg text-gray-700 mb-16">
          Our team consists of highly skilled professionals, each playing a
          crucial role in delivering top-notch solutions. Get to know our team
          members who make everything possible.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mb-6 object-cover"
            />
            <h3 className="text-xl font-bold text-teal-700 mb-4">
              {member.name}
            </h3>
            <p className="text-teal-500 text-lg mb-4">{member.role}</p>
            <p className="text-gray-600">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
