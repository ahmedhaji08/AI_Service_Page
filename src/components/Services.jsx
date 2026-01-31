export default function Services() {
  const services = [
    {
      title: "AI Readiness Assessment",
      desc: "Evaluate data, tools, and infrastructure for AI adoption."
    },
    {
      title: "AI Strategy & Roadmap",
      desc: "Clear, business-aligned AI execution plans."
    },
    {
      title: "Model & Tool Selection",
      desc: "Choose the right models, frameworks, and stacks."
    },
    {
      title: "Deployment & Optimization",
      desc: "Production-ready AI with monitoring & scaling."
    }
  ];

  return (
    <section id="services" className="section">
      <h2 className="section-title">Our Expertise</h2>
      <div className="service-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card fade-up">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
