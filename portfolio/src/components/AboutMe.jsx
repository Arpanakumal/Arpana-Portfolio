import { Briefcase, Code, User } from "lucide-react";




export const AboutMe =()=>{
    return(
        <section id="about" className="py-24 px-4 relative"
        >{""}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl fpnt-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3>I'm a BCA student  who enjoys building and designing web applications and solving problems through code.
                             I work with React to create responsive and scalable applications.</h3>
                        <p className="text-muted-foreground">
                            I am passionate about learning new technologies, improving my development skills, and building projects that combine clean design with practical functionality.
                             
                        </p>
                        <p className="text-muted-foreground">
                            Currently, I am exploring backend development and  data engineering.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {""}
                                Get In Touch
                            </a>
                           <a
  href="/Arpana_CV.pdf"
  download
  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
>
  Download CV
</a>


                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Code className=" h-6 w-6 text-primary" />

                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    {""}
                                    <p className="text-muted-foreground">
                                        Creating responsive website and web application with modern frameworks
                                    </p>

                                </div>

                            </div>
                        </div>
                         <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-">
                                <div className="p-3 rounded-full bg-primary/10">
                                <User className=" h-6 w-6 text-primary" />

                                </div>
                                  <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    {""}
                                    <p className="text-muted-foreground">
                                        Designing intuitive user interfaces and seamless user experiences
                                    </p>

                                </div>

                            </div>
                        </div>
                         <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className=" h-6 w-6 text-primary" />

                                </div>
                                  <div className="text-left">
                                    <h4 className="font-semibold text-lg">Database and Data Engineering</h4>
                                    {""}
                                    <p className="text-muted-foreground">
                                        Working with databases like MongoDB and exploring data processing, storage, and data engineering concepts.
                                    </p>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

    );
}