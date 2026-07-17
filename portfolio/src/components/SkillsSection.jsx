

const Skills =[
    {name:"HTML/CSS", category:"frontend"},
    { name: "JavaScript",  category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Next.js",  category: "frontend" },

    { name: "Node.js",  category: "backend" },
    { name: "Express",  category: "backend" },
    { name: "MongoDB",  category: "backend" },

    { name: "Git/GitHub", category: "tools" },
    { name: "VS Code",  category: "tools" },
];

export const SkillsSection = ()=>{
    return(
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Skills.map((Skill,key)=>(
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover ">
                        <div className="text-lg mb-4">
                            <h3 className="font-semibold text-lg">{Skill.name}</h3>
                        </div>

                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]"
                            >

                            </div>

                        </div>

                    </div>
                ))

                }

            </div>

        </div>
            
    </section>
    );
};