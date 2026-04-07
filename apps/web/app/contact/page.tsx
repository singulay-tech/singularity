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
        <h1>开启合作，激发孩子的创造力成长</h1>
        <p className="lead">
          当前为静态官网演示版本，已预留线索字段和提交结构，后续将在V2接入后端服务。
        </p>
        <div className="grid two-col">
          <article className="card">
            <h2>合作咨询方向</h2>
            <ul>
              <li>学校与机构课程合作</li>
              <li>产品试用与项目共建</li>
              <li>活动联动与品牌合作</li>
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
