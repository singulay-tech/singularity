import Link from "next/link";
import { solutionPoints } from "@/lib/site-data";

export const metadata = {
  title: "解决方案",
  description:
    "星界力解决方案面向个人创作者、产品团队与组织场景，覆盖理解、沟通、创作与协作提效。",
};

const audienceCards = [
  {
    title: "面向个人用户",
    desc: "在内容消费与创作中提升效率，让每个想法都能形成可展示作品。",
  },
  {
    title: "面向产品与研发团队",
    desc: "通过沟通翻译与流程编排减少协作损耗，提升需求到交付的一致性。",
  },
  {
    title: "面向组织与生态伙伴",
    desc: "沉淀可复用 Agent 能力模块，支持跨团队扩展和持续运营。",
  },
];

export default function SolutionsPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="tag">解决方案</p>
        <h1>从理解问题到放大执行的三阶段路径</h1>
        <div className="timeline">
          {solutionPoints.map((point) => (
            <div className="timeline-item" key={point}>
              {point}
            </div>
          ))}
        </div>
        <div className="grid cards-3">
          {audienceCards.map((card) => (
            <article className="card" key={card.title}>
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
            </article>
          ))}
        </div>
        <div className="actions">
          <Link className="btn btn-primary" href="/contact">
            获取场景方案
          </Link>
        </div>
      </div>
    </section>
  );
}
