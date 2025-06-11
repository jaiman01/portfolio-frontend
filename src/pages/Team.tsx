import React, { useEffect, useState } from "react";
import axios from "axios";

interface TeamMember {
  _id?: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

const Team: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/team");
      setTeamMembers(res.data);
    } catch (err) {
      console.error("Failed to fetch team members:", err);
    }
  };

  return (
    <main className="max-w-[900px] mx-auto px-4 mt-12">
      <h1 className="text-white font-extrabold text-4xl mb-8">Our Team</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <article
            key={member._id}
            className="bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-pink-500/50 transition-shadow"
          >
            <img
              alt={`Portrait of ${member.name}`}
              className="w-32 h-32 rounded-full object-cover mb-4 shadow-[0_0_15px_#f0f,0_0_30px_#0ff]"
              src={member.image}
            />
            <h2 className="font-semibold text-xl mb-1 text-pink-400">
              {member.name}
            </h2>
            <p className="text-gray-300 text-sm mb-2">{member.role}</p>
            <p className="text-gray-400 text-xs max-w-[220px]">
              {member.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Team;
