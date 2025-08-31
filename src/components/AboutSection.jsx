import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* EXPERIENCE SECTION */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center md:text-left text-primary">
              Experiences
            </h2>
      
            {/* Experience 1 */}
  <div className="gradient-border p-6 rounded-2xl card-hover">
    <h3 className="text-xl font-semibold">Google Android Developer</h3>
    <p className="text-muted-foreground mt-1">Virtual Internship</p>
    <p className="text-sm text-gray-500 mt-2">Oct 2024 - Dec 2024</p>
    <a
      href="https://drive.google.com/file/d/1ptIxSiw1jHhgIqVuCHj6ZsY8PrOplkbC/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
    >
      View Certificate
    </a>
  </div>

  {/* Experience 2 */}
  <div className="gradient-border p-6 rounded-2xl card-hover">
    <h3 className="text-xl font-semibold">
      Walmart Advanced Software Engineering Job Simulation
    </h3>
    <p className="text-muted-foreground mt-1">Virtual Internship</p>
    <p className="text-sm text-gray-500 mt-2">13th March, 2024</p>
    <a
      href="https://drive.google.com/file/d/1AMT2epgfHD6E-SRzI6h18JxNT9rC2PAB/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
    >
      View Certificate
    </a>
  </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1RI3oZ1fjt2MW1ewbRP2xUWQtShABTVpa/view?usp=drive_link"
                 target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View CV
              </a>
            </div>
          </div>

          {/* EDUCATION SECTION */}
          <div className="space-y-6" >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center md:text-left">
              Education
            </h2>

           
  {/* Education 1 */}
  <div className="gradient-border p-6 rounded-2xl card-hover">
    <h3 className="text-xl font-semibold">KIIT</h3>
    <p className="text-muted-foreground mt-1">
      B.Tech in Computer Science Engineering
    </p>
    <p className="text-sm text-gray-500 mt-2">2023 – 2027</p>
    <p className="mt-2 font-medium">CGPA: 8.42</p>
  </div>

  {/* Education 2 */}
  <div className="gradient-border p-6 rounded-2xl card-hover">
    <h3 className="text-xl font-semibold">Army Public School, Barrackpore</h3>
    <p className="text-muted-foreground mt-1">Higher Secondary Education</p>
    <p className="text-sm text-gray-500 mt-2">2022</p>
    <p className="mt-2 font-medium">Grade: 94% (CBSE)</p>
  </div>

  {/* Education 3 */}
  <div className="gradient-border p-6 rounded-2xl card-hover">
    <h3 className="text-xl font-semibold">Army Public School, Barrackpore</h3>
    <p className="text-muted-foreground mt-1">Secondary Education</p>
    <p className="text-sm text-gray-500 mt-2">2020</p>
    <p className="mt-2 font-medium">Grade: 89% (CBSE)</p>
  </div>
          </div>
        </div>
      </div>
    </section>
  );
};
