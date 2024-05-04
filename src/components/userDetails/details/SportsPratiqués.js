import { Card, Col } from "antd";

function Sport(data) {

  return (
    <>
      <Col span={24} md={600} className="mb-24">
        <Card bordered={false}>
          <div className="info">
            <h1 className="font-semibold bt-20">Sports Pratiqués:</h1>
            <div>
              <h3 className="question">Si oui, quel sport ?</h3>
              <p className="answer">{data?.data?.siOuiQuelSport}</p>
            </div>
            {data?.quelPosteTuOccupes ? (
              <div>
                <h3 className="question">Quel poste tu occupes ?</h3>
                <p className="answer">{data?.quelPosteTuOccupes}</p>
              </div>
            ) : null}

            <div>
              <h3 className="question">Nombre d'heure par semaine ?</h3>
              <p className="answer">{data?.data?.nombreDheureParSemaine}</p>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default Sport;
