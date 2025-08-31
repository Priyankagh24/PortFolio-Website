import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";




const projects = [
  {
    id: 1,
    title: "Real Time Code Editor",
    description: "It allows multiple users to collaborate and edit the code in the same virtual room.",
    image: "/projects/ss12.png",
    tags: ["Node.js", "React", "Express.js","MongoDb" , "Socket.io"],
    demoUrl: "https://codeeditor-1-s4b5.onrender.com/",
    githubUrl: "https://github.com/Priyankagh24/CodeEditor",
  },
  {
    id: 2,
    title: "News-App",
    description:
    "It is a clean and responsive web application built with React.js that fetches and displays real-time articles using the NewsAPI. It allows users to search for news by topic and renders the results in a visually appealing card-based UI.",
    image: "/projects/ss9.png",
    tags: ["React"],
    demoUrl: "#",
    githubUrl: "https://github.com/Priyankagh24/News-App",
  },
  {
    id: 3,
    title: "Path Finding Visualizer",
    description:
     "This is a Simple Version of a pathfinding visualizer which typically allows users to define a start point and an end point on a graph or grid, and then visualizes the process of finding a path between these points using different algorithms such as Dijkstra's algorithm, A* (A-star) algorithm, BFS, DFS, etc" ,
    image: "/projects/ss3.png",
    tags: ["HTML","Css","Javascript"],
    demoUrl: "https://priyankagh24.github.io/Path-finding-visualizer/",
    githubUrl: "https://github.com/Priyankagh24/Path-finding-visualizer",
  },
];



// Animated counter that starts when it comes into view
const Counter = ({ target, label, showPlus = true }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let timer = null;

    const startCounting = () => {
      let current = 0;
      const duration = 2000; // 2s animation
      const stepTime = Math.max(10, Math.floor(duration / target));

      timer = setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= target) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
          observer.disconnect(); // only once
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (timer) clearInterval(timer);
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target]);

  return (
    <div ref={ref} className="p-6 rounded-2xl bg-card shadow-md">
      <h3 className="text-3xl font-bold text-primary">{count}+</h3>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};



export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Priyankagh24"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>

        

        {/* Achievements Section */}
       {/* Achievements Section (animated counters) */}
<section className="mt-20 grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
  <Counter target={250} label="Problems Solved (Across Coding Platforms)" />
  <Counter target={20} label="Completed Projects" />
  <Counter target={2} label="Badges Count" />
    <Counter target={569} label="KIITEE Rank"  showPlus={false}/>
</section>


        
      </div>
    </section>
  );
};
