export const metadata = {
  title: "关于我们",
  description:
    "了解北京星界力科技有限公司的品牌由来、企业定位与核心理念。",
};

const values = [
  {
    name: "星",
    text: "象征每个孩子独特的思维光芒，通过AI激发潜能。",
  },
  {
    name: "界",
    text: "构建开放协作的数字创造空间，鼓励跨学科表达。",
  },
  {
    name: "力",
    text: "用可持续的学习机制将灵感转化为真实成长。",
  },
];

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="tag">关于星界力</p>
        <h1>AI创造力教育科技公司的长期主义实践</h1>
        <p className="lead">
          北京星界力科技有限公司面向6-15岁青少年，围绕“技术 + 教育”
          双维度构建创作型成长体系。
        </p>
        <div className="grid cards-3">
          {values.map((value) => (
            <article className="card" key={value.name}>
              <p className="eyebrow">{value.name}</p>
              <h2>核心价值</h2>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
        <article className="card">
          <h2>企业主体信息</h2>
          <ul>
            <li>公司名称：北京星界力科技有限公司</li>
            <li>统一社会信用代码：91110106MAEH26G58K</li>
            <li>企业类型：有限责任公司（自然人独资）</li>
            <li>成立日期：2025年04月30日</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
