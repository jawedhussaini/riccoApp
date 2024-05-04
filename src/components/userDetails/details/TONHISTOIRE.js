import { Card, Col } from "antd";

function TonHistory(data) {
  console.log(data);
  return (
    <>
      <Col span={24} md={600} className="mb-24">
        <Card bordered={false}>
          <div className="info">
            <h1 className="font-semibold bt-20">TON HISTOIRE :</h1>
            <div>
              <h3 className="question">
                Raconte moi ton parcours en quelques lignes
              </h3>
              <p className="answer">{data?.data}</p>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default TonHistory;
