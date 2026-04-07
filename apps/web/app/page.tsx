import Link from "next/link";
import Image from "next/image";
import { productGroups, site, solutionPoints } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="tag">AI驱动型创造力引擎</p>
            <h1>{site.title}</h1>
            <p className="lead">{site.description}</p>
            <div className="actions">
              <Link className="btn btn-primary" href="/contact">
                预约咨询
              </Link>
              <Link className="btn btn-secondary" href="/products">
                查看产品体系
              </Link>
            </div>
          </div>
          <div className="card glow-card">
            <Image
              alt="星界力品牌标志"
              className="hero-logo"
              height={64}
              src="/logo.jpg"
              width={64}
            />
            <h2>核心隐喻体系</h2>
            <ul>
              <li>星：激发每个孩子独特思维与原生灵感</li>
              <li>界：构建可创造、可协作的数字创作空间</li>
              <li>力：让学习成为可持续成长的创作循环</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>产品矩阵</h2>
          <div className="grid cards-3">
            {productGroups.map((group) => (
              <article className="card" key={group.title}>
                <p className="eyebrow">{group.subtitle}</p>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <strong>{item.name}</strong>
                      <span>{item.description}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>教育解决方案路径</h2>
          <div className="timeline">
            {solutionPoints.map((point) => (
              <div className="timeline-item" key={point}>
                {point}
              </div>
            ))}
          </div>
          <div className="actions">
            <Link className="btn btn-primary" href="/solutions">
              查看完整方案
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
