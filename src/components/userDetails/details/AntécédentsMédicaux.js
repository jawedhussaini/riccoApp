import { Card, Col } from "antd";

function Medicen(data) {
  return (
    <>
      <Col span={24} md={600} className="mb-24">
        <Card bordered={false}>
          <div className="info">
            <h1 className="font-semibold bt-20">Antécédents médicaux:</h1>
            <div>
              <h3 className="question">Allergie(s)?</h3>
              <p className="answer">{data?.data?.Allergies}</p>
            </div>
            <div>
              <h3 className="question">Si oui lesquels ?</h3>
              <p className="answer">{data?.data?.siOuiLesquels}</p>
            </div>
            <div>
              <h3 className="question">Asthme ?</h3>
              <p className="answer">{data?.data?.ashme}</p>
            </div>
            <div>
              <h3 className="question">Allergie(s) alimentaire(s)</h3>
              <p className="answer">{data?.data?.allergiesAlimentaires}</p>
            </div>
            <div>
              <h3 className="question">Si oui lesquelles ?</h3>
              <p className="answer">{data?.data?.siOuiLesquelles}</p>
            </div>
            <div>
              <h3 className="question">Problèmes articulaires</h3>
              <p className="answer">{data?.data?.problemesArticulaires}</p>
            </div>
            <div>
              <h3 className="question">Problèmes digestifs</h3>
              <p className="answer">{data?.data?.problemesDigestifs}</p>
            </div>
            <div>
              <h3 className="question">Problèmes musculaires</h3>
              <p className="answer">{data?.data?.problemesMusculaires}</p>
            </div>
            <div>
              <h3 className="question">Anciennes opérations</h3>
              <p className="answer">{data?.data?.anciennesOperations}</p>
            </div>
            <div>
              <h3 className="question">Autre(s)</h3>
              <p className="answer">{data?.data?.autres}</p>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default Medicen;
