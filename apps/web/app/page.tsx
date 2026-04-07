import Link from "next/link";
import Image from "next/image";
import {
  featuredProducts,
  productGroups,
  site,
  solutionPoints,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="tag">AI Agent 产品与工作流平台</p>
            <h1>{site.title}</h1>
            <p className="lead">{site.description}</p>
            <div className="actions">
              <Link className="btn btn-primary" href="/contact">
                联系我们
              </Link>
              <Link className="btn btn-secondary" href="/products">
                浏览产品矩阵
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
            <h2>核心价值路径</h2>
            <ul>
              <li>增强认知：让复杂信息快速变得可理解、可决策</li>
              <li>放大行动：把重复任务转化为自动化与半自动化流程</li>
              <li>沉淀能力：将成功实践封装为可复用 Agent 模块</li>
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
          <h2>Agent 价值落地路径</h2>
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

      <section className="section">
        <div className="container">
          <h2>已上线产品</h2>
          <p className="lead">
            围绕创作、沟通与智能体配置三类高频场景，持续迭代面向全年龄段用户的产品体验。
          </p>
          <div className="grid cards-3">
            {featuredProducts.map((product) => (
              <article className="card product-card" key={product.name}>
                <p className="eyebrow">{product.highlight}</p>
                <h3>{product.name}</h3>
                <p>{product.summary}</p>
                <a
                  className="card-link"
                  href={product.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  访问产品
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
