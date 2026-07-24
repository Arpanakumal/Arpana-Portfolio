import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Online Service Provider React App",
    description:
      "Online platform that offers services like cleaning, plumbing, light installations, etc.",
    image: "/projects/Service.png",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    demoUrl: "https://react-app-homeease-client.vercel.app/",
    githubUrl: "https://github.com/Arpanakumal/React-app",
  },
  {
    id: 2,
    title: "Ecommerce Website",
    description: "Online clothing store built with React.",
    image: "/projects/Ecommerce.png",
    tags: ["React"],
    demoUrl: "#",
    githubUrl: "https://github.com/Arpanakumal/React-Ecommerce",
  },
  {
    id: 3,
    title: "Expense Tracker",
    description: "React application for tracking daily expenses.",
    image: "/projects/Expense.png",
    tags: ["React", "Chakra UI"],
    demoUrl: "#",
    githubUrl: "https://github.com/Arpanakumal/React-Expense-Tracker",
  },
    {
        id:4,
        title:"Movie Search",
        description: "Search movies, Add to favourite",
        image:"/projects/Movie.png",
        tags:["React","TMDB API"],
        demoUrl:"#",
        githubUrl:"https://github.com/Arpanakumal/React-Movie-Search"
    },
     {
        id:5,
        title:"Quiz App",
        description: "Take quizzes get results at the end",
        image:"/projects/Quiz.png",
        tags:["React"],
        demoUrl:"#",
        githubUrl:"https://github.com/Arpanakumal/React-Quiz-App"
    },
     {
        id:6,
        title:"To-Do List",
        description: "Add Tasks, Remove Tasks, Mark Complete",
        image:"/projects/to-do.png",
        tags:["React"],
        demoUrl:"#",
        githubUrl:"https://github.com/Arpanakumal/React-To-Do-List"
    },
     {
        id:7,
        title:" Weather App",
        description: "Displays Weather of cities around the world",
        image:"/projects/Weather.png",
        tags:["React"],
        demoUrl:"#",
        githubUrl:"https://github.com/Arpanakumal/React-Weather-App"
    },

];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.id}
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
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">

                  <div className="flex space-x-3">

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      <FaGithub size={20} />
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
            rel="noopener noreferrer"
            href="https://github.com/Arpanakumal"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
