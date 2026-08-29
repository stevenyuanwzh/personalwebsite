import Link from "next/link";
import { Nav } from "@/components/Nav";
import { ProjectCard } from "@/components/ProjectCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const skills = ["CAD + mechanical design", "Rapid prototyping", "Experimental testing", "Physics modeling", "Data analysis", "Technical documentation", "React", "Next.js", "TypeScript"];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="kicker">ENGINEERING PORTFOLIO / 2026</p>
            <h1>I build, test, <em>break</em>, and improve things.</h1>
            <p className="hero-sub">A collection of mechanical, physics, software, and design projects—documented from first sketch to final result.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore projects</a>
              <a className="button secondary" href="mailto:you@example.com">Get in touch</a>
            </div>
          </div>
          <ImagePlaceholder label="Portrait, workshop, or strongest engineering photo" ratio="1 / 1" />
        </section>

        <section className="proof-strip">
          <div className="shell proof-grid">
            <div><strong>30 m</strong><span>Target distance achieved</span></div>
            <div><strong>Iterative</strong><span>Design → test → diagnose → improve</span></div>
            <div><strong>Hands-on</strong><span>Builds backed by calculations</span></div>
          </div>
        </section>

        <section id="projects" className="section shell">
          <div className="section-head">
            <div><p className="kicker">SELECTED WORK</p><h2>Engineering projects</h2></div>
            <p>Each project is presented as a case study: objective, constraints, design decisions, testing, results, and what I would improve next.</p>
          </div>
          <div className="project-grid">
            <ProjectCard index="01" title="Projectile Launcher" discipline="Physics · Mechanical Design" description="A team projectile-motion project that evolved through multiple concepts, controlled testing, stability improvements, and environmental compensation before achieving the 30 m target objective." href="/projects/projectile-launcher" metric="RESULT · TARGET HIT AT 30 M" />
            <ProjectCard index="02" title="Project Two" discipline="Mechanical · CAD" description="Reserved for your next engineering project. Add drawings, prototypes, testing photos, calculations, and outcomes." />
            <ProjectCard index="03" title="Project Three" discipline="Robotics · Electronics" description="Reserved for a robotics, electronics, controls, or programming project." />
            <ProjectCard index="04" title="Project Four" discipline="Software · Engineering" description="Reserved for software, simulation, analysis, or another technical build." />
          </div>
        </section>

        <section id="skills" className="section section-dark">
          <div className="shell">
            <div className="section-head"><div><p className="kicker">TOOLKIT</p><h2>How I work</h2></div><p>I like projects that require both analytical reasoning and physical iteration.</p></div>
            <div className="skill-grid">{skills.map((skill, i) => <div className="skill" key={skill}><span>{String(i + 1).padStart(2, "0")}</span>{skill}</div>)}</div>
          </div>
        </section>

        <section id="about" className="section shell about-grid">
          <div><p className="kicker">ABOUT</p><h2>Curious by default.<br/>Evidence-driven by habit.</h2></div>
          <div className="about-copy"><p>I’m an engineering student interested in turning theory into things that can be built and tested. My favorite projects force me to move between calculations, physical constraints, fabrication, and real-world data.</p><p>This portfolio is itself a technical project, built with React, Next.js, TypeScript, HTML/CSS concepts, Git, and Vercel.</p><Link className="text-link" href="/#projects">See the work →</Link></div>
        </section>
      </main>
      <footer><div className="shell footer-grid"><strong>YOUR NAME</strong><span>Engineering portfolio</span><a href="mailto:you@example.com">you@example.com</a></div></footer>
    </>
  );
}
