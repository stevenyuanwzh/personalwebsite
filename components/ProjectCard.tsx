import Link from "next/link";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function ProjectCard({ index, title, discipline, description, href, metric }: {
  index: string;
  title: string;
  discipline: string;
  description: string;
  href?: string;
  metric?: string;
}) {
  const inner = (
    <article className="project-card">
      <ImagePlaceholder label={`${title} hero image`} ratio="4 / 3" />
      <div className="project-card-copy">
        <div className="eyebrow"><span>{index}</span>{discipline}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        {metric && <div className="metric-chip">{metric}</div>}
        <span className="project-link">{href ? "View case study ↗" : "Coming soon"}</span>
      </div>
    </article>
  );

  return href ? <Link href={href} className="project-card-link">{inner}</Link> : inner;
}
