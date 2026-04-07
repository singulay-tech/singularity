import { featuredProducts, productGroups } from "@/lib/site-data";

export const metadata = {
  title: "产品体系",
  description:
    "星界力产品体系覆盖智能体基础设施、场景化生产力产品与开放生态能力，服务全年龄段用户的智能协作与创作场景。",
};

export default function ProductsPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="tag">产品体系</p>
        <h1>从 Agent 能力到底层场景落地的产品矩阵</h1>
        <p className="lead">
          围绕“认知增强 + 行动提效 + 能力沉淀”，构建可持续迭代的产品体系。
        </p>
        <div className="grid cards-3">
          {productGroups.map((group) => (
            <article className="card" key={group.title}>
              <p className="eyebrow">{group.subtitle}</p>
              <h2>{group.title}</h2>
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
        <div className="grid cards-3">
          {featuredProducts.map((product) => (
            <article className="card product-card" key={product.name}>
              <p className="eyebrow">{product.highlight}</p>
              <h2>{product.name}</h2>
              <p>{product.summary}</p>
              <a
                className="card-link"
                href={product.url}
                rel="noreferrer"
                target="_blank"
              >
                打开产品站点
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
