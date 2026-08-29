import Link from "next/link";
import { Nav } from "@/components/Nav";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const phases = [
  ["01", "Frame the problem", "The goal was to launch a projectile toward a stationary target 30 m away while accounting for real-world uncertainty."],
  ["02", "Explore concepts", "The team considered counterweight and elastic trebuchet concepts before moving toward a pneumatic approach that offered a higher initial velocity and a shorter flight time."],
  ["03", "Model the launch", "The analysis considered range, gravity, stored pressure, projectile mass, chamber volume, environmental temperature, initial velocity, launch angle, wind, and drag."],
  ["04", "Test and diagnose", "Early shots had sufficient range and repeatable speed, but horizontal deviation revealed that stability, setup alignment, and environmental effects dominated accuracy."],
  ["05", "Iterate", "A tripod improved stability, the launch setup was refined, and the team adjusted its aiming strategy while checking connections and seals before later trials."],
  ["06", "Validate", "The final test produced a successful impact on the target at 30 m, while also exposing the remaining weakness: small movement during valve actuation reduced repeatability."],
];

export default function ProjectileLauncher() {
  return (
    <>
      <Nav />
      <main>
        <section className="case-hero shell">
          <div>
            <Link href="/#projects" className="back-link">← All projects</Link>
            <p className="kicker">CASE STUDY 01 · AP PHYSICS 1 · TEAM PROJECT</p>
            <h1>Projectile Launcher</h1>
            <p className="case-lede">Designing, modeling, testing, and iterating a projectile-launch system to reach a stationary target 30 meters away.</p>
          </div>
          <ImagePlaceholder label="Final launcher / best project hero photo" ratio="4 / 3" />
        </section>

        <section className="case-stats shell">
          <div><span>Objective</span><strong>30 m target</strong></div>
          <div><span>Final pressure</span><strong>30 PSI</strong></div>
          <div><span>Modeled launch angle</span><strong>≈ 1.47°</strong></div>
          <div><span>Outcome</span><strong>Target hit</strong></div>
        </section>

        <section className="section shell case-grid">
          <div className="sticky-label"><p className="kicker">THE CHALLENGE</p><h2>Accuracy was harder than range.</h2></div>
          <div className="case-copy"><p>The team’s early concepts included counterweight and elastic trebuchets. Those approaches introduced uncertainties from material flexibility, pivot friction, alignment, weather, and longer projectile flight time.</p><p>The design direction shifted toward a pneumatic launcher because it could provide greater initial velocity and reduce the time during which external conditions influenced the projectile.</p><div className="callout"><strong>Key realization</strong><p>Once range was achieved consistently, the project stopped being mainly a power problem and became a stability and repeatability problem.</p></div></div>
        </section>

        <section className="section section-dark">
          <div className="shell"><p className="kicker">ENGINEERING PROCESS</p><h2 className="section-title">From concept to validation</h2><div className="phase-list">{phases.map(([n,t,d]) => <article className="phase" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div>
        </section>

        <section className="section shell">
          <div className="section-head"><div><p className="kicker">DESIGN DEVELOPMENT</p><h2>Document the iterations.</h2></div><p>Replace these placeholders with your sketches, CAD, build photos, test setup, and result images.</p></div>
          <div className="gallery-grid">
            <ImagePlaceholder label="Concept sketches / early design" ratio="16 / 10" />
            <ImagePlaceholder label="Launcher components / assembly" ratio="16 / 10" />
            <ImagePlaceholder label="Tripod or stabilization setup" ratio="16 / 10" />
            <ImagePlaceholder label="Testing field / target setup" ratio="16 / 10" />
            <ImagePlaceholder label="Calculations / trajectory diagram" ratio="16 / 10" />
            <ImagePlaceholder label="Final result / impact evidence" ratio="16 / 10" />
          </div>
        </section>

        <section className="section shell case-grid">
          <div className="sticky-label"><p className="kicker">TESTING & ANALYSIS</p><h2>Control what you can. Measure what you can’t.</h2></div>
          <div className="case-copy"><p>Initial trials showed repeatable launch speed but noticeable lateral deviation. The team identified setup alignment, wind, air resistance, and small launch-angle changes as likely contributors.</p><p>Stabilizing the launcher with a tripod reduced unwanted movement and made shots more predictable. During later trials, the team also accounted for wind direction and refined aiming rather than changing the entire launcher once adequate power had been demonstrated.</p><blockquote>Consistent velocity did not guarantee consistent impact location.</blockquote></div>
        </section>

        <section className="result-section">
          <div className="shell result-grid"><div><p className="kicker">RESULT</p><h2>30 meters.<br/><em>Target hit.</em></h2><p>The final trial achieved the project objective. The launcher reached the stationary target, confirming that the combined modeling, setup improvements, and aiming adjustments were sufficient for a successful shot.</p></div><div className="result-number">30<span>m</span></div></div>
        </section>

        <section className="section shell case-grid">
          <div className="sticky-label"><p className="kicker">WHAT I’D IMPROVE</p><h2>The next iteration.</h2></div>
          <div className="case-copy"><p>The remaining weakness was repeatability. Manual valve actuation could disturb the launcher by a small amount, and small angular changes mattered significantly at distance.</p><ul className="improvement-list"><li>Develop a more rigid and repeatable mounting system.</li><li>Use a remote or lower-disturbance actuation method.</li><li>Improve aiming and alignment instrumentation.</li><li>Use more consistent projectile geometry to reduce aerodynamic variability.</li><li>Measure projectile motion directly with higher-speed imaging or other instrumentation.</li><li>Use more advanced simulation to model wind and drag.</li></ul></div>
        </section>
      </main>
      <footer><div className="shell footer-grid"><strong>PROJECT 01</strong><span>Projectile Launcher</span><Link href="/">Back home ↑</Link></div></footer>
    </>
  );
}
