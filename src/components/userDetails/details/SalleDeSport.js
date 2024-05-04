import { Card, Col } from "antd";

function Gem(data) {
  return (
    <>
      <Col span={24} md={600} className="mb-24">
        <Card bordered={false}>
          <div className="info">
            <h1 className="font-semibold bt-20">Salle De Sport:</h1>
            <div>
              <h3 className="question">Quelle salle de sport vas-tu ?</h3>
              <p className="answer">{data?.data?.quelleSalleDeSportVasTu}</p>
            </div>
            <div>
              <h3 className="question">
                Si tu n'as pas de salle, matériels à disposition ?
              </h3>
              <p className="answer">
                {data?.data?.siTuNasPasDeSalleMaterielsADisposition}
              </p>
            </div>
            <div>
              <h3 className="question">Nombre de séance / semaine</h3>
              <p className="answer">{data?.data?.nombreDeSeanceSemaine}</p>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default Gem;
