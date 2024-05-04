import { Card, Col } from "antd";

function CheckUpHormonal(data) {
  return (
    <>
      <Col span={24} md={600} className="mb-24">
        <Card bordered={false}>
          <div className="info">
            <h1 className="font-semibold bt-20">Check up Hormonal:</h1>
            <div>
              <h3 className="question">
                Tes menstruations arrivent-elles la semaine prochaine ?
              </h3>
              <p className="answer">
                {data?.data?.tesMenstruationsArriventEllesLaSemaineProchaine}
              </p>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default CheckUpHormonal;
