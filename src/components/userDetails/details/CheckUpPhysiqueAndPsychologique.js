import { Card, Col } from "antd";


function CheckUpPhysique(data) {
  return (
    <>
      <Col span={24} md={600} className="mb-24">
        <Card bordered={false}>
          <div className="info">
            <h1 className="font-semibold bt-20">
              Check up Physique & Psychologique:
            </h1>

            <div>
              <h3 className="question">
                Résume tes sensations de ton mois d'un point de vue physique &
                psychologique
              </h3>
              <p className="answer">
                {
                  data?.data
                    ?.resumeTesSensationsDeLaSemaineDUnPointDeVuePhysiquePsychologique
                }
              </p>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default CheckUpPhysique;
