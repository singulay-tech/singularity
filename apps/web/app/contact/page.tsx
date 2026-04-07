export const metadata = {
  title: "联系我们",
  description:
    "联系北京星界力科技有限公司，获取产品资料、合作方案与商务沟通支持。",
};

const fields = ["姓名", "联系方式", "机构名称", "合作方向", "当前需求"];

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="tag">联系我们</p>
        <h1>开启合作，共建 AI Agent 产品能力</h1>
        <p className="lead">
          当前为静态官网版本，已预留沟通字段与提交结构，后续将在 V2
          接入后端服务与后台管理。
        </p>
        <div className="grid two-col">
          <article className="card">
            <h2>合作咨询方向</h2>
            <ul>
              <li>产品共建与场景接入</li>
              <li>Agent 配置与流程设计</li>
              <li>团队协作与沟通提效落地</li>
            </ul>
          </article>
          <article className="card">
            <h2>线索字段预览</h2>
            <ul>
              {fields.map((field) => (
                <li key={field}>{field}</li>
              ))}
            </ul>
            <p>商务邮箱：singularity@singularitypowered.com</p>
          </article>
        </div>
      </div>
    </section>
  );
}
