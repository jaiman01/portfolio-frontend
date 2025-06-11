import React from "react";

const About: React.FC = () => {
  return (
    <main className="max-w-[900px] mx-auto px-4 mt-12">
      <h1 className="text-white font-extrabold text-4xl mb-8">About Me</h1>
      <section className="space-y-6 text-gray-300 text-base leading-relaxed">
        <p>
          Backend Developer | AI Integrations | Building Scalable Products with
          NestJS & TypeScript
        </p>
        <p>
          I specialize in developing backend systems using modern frameworks
          like NestJS, Next.js, and TypeScript. With a strong grasp of MongoDB,
          Redis, I’ve built and deployed features that are now live in
          production.
        </p>
        <p>
          Most recently, I worked on an AI-powered financial assistant for Grip
          Invest, integrating LangChain, OpenAI, and complex data systems to
          deliver smart, real-time investment responses to thousands of users.
        </p>
        <p>
          I'm passionate about building scalable, efficient solutions that
          enhance user experience and solve real problems. Let’s connect if
          you’re looking for someone who combines technical skill with
          real-world impact.
        </p>
      </section>
    </main>
  );
};

export default About;
