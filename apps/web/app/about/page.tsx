export const metadata = {
  title: "关于我们",
  description:
    "了解北京星界力科技有限公司的品牌定位、产品方向与企业信息。",
};

const values = [
  {
    name: "星",
    text: "象征持续探索与开放创新，鼓励个体突破固有边界。",
  },
  {
    name: "界",
    text: "象征跨场景连接能力，让产品在不同人群与流程中流动。",
  },
  {
    name: "力",
    text: "象征执行与迭代能力，用 Agent 把想法转化为真实产出。",
  },
];

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="tag">关于星界力</p>
        <h1>面向全年龄段用户的 AI Agent 产品实践</h1>
        <p className="lead">
          北京星界力科技有限公司聚焦 AI Agent 产品与工作流体验，面向个人、
          团队与组织提供更高效的理解、沟通与创作能力。
        </p>
        <div className="grid cards-3">
          {values.map((value) => (
            <article className="card" key={value.name}>
              <p className="eyebrow">{value.name}</p>
              <h2>核心价值</h2>
              <p>{value.text}</p>
            </article>
          ))}
          <article className="card about-legal-card">
            <h2>企业主体信息</h2>
            <ul>
              <li>公司名称：北京星界力科技有限公司</li>
              <li>统一社会信用代码：91110106MAEH26G58K</li>
              <li>企业类型：有限责任公司（自然人独资）</li>
              <li>成立日期：2025年04月30日</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
