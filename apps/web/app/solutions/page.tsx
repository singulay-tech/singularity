import Link from "next/link";
import { solutionPoints } from "@/lib/site-data";

export const metadata = {
  title: "解决方案",
  description:
    "星界力教育解决方案面向家庭、学校与机构，覆盖创造力培养、课程能力建设与成果展示。",
};

const audienceCards = [
  {
    title: "面向家庭用户",
    desc: "提供孩子创作成长路径，让每个想法都能形成可展示作品。",
  },
  {
    title: "面向学校与机构",
    desc: "提供课程设计、教学支持与成果运营能力，提升项目落地效果。",
  },
  {
    title: "面向生态伙伴",
    desc: "提供产品共建与活动联动机制，放大品牌传播与教育影响力。",
  },
];

export default function SolutionsPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="tag">解决方案</p>
        <h1>从灵感到作品的三阶段成长路径</h1>
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
            申请合作沟通
          </Link>
        </div>
      </div>
    </section>
  );
}
