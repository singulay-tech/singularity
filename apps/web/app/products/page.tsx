import { productGroups } from "@/lib/site-data";

export const metadata = {
  title: "产品体系",
  description:
    "星界力产品体系覆盖工具类、游戏化、教育赋能三大产品线，支撑6-15岁青少年创造力成长。",
};

export default function ProductsPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="tag">产品体系</p>
        <h1>从创作工具到教育赋能的完整矩阵</h1>
        <p className="lead">
          围绕“能力 + 场景 + 结果”，构建可持续的学习与创作闭环。
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
      </div>
    </section>
  );
}
