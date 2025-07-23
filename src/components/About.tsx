import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS",
    "Node.js", "Next.js", "Vue.js", "Git", "Figma", "Responsive Design"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-primary p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <div className="w-72 h-72 rounded-xl bg-gradient-secondary flex items-center justify-center text-6xl font-bold text-primary">
                    JD
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-glow">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Hi, I'm John Doe</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A passionate frontend developer with 3+ years of experience building 
                modern web applications. I love turning ideas into reality through clean, 
                efficient code and intuitive user interfaces.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <Card className="p-4 text-center bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </Card>
              <Card className="p-4 text-center bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </Card>
              <Card className="p-4 text-center bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfied</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;