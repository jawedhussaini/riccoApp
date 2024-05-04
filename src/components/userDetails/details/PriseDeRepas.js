import { Card, Col } from "antd";

function Meal(data) {
  return (
    <>
      <Col span={24} md={600} className="mb-24">
        <Card bordered={false}>
          <div className="info">
            <h1 className="font-semibold bt-20">Prise de repas:</h1>
            <div>
              <h3 className="question">nombre de repas / jour</h3>
              <p className="answer">{data?.data?.nombreDeRepasJour}</p>
            </div>
            <div>
              <h3 className="question">
                prends-tu des compléments alimentaires ?
              </h3>
              <p className="answer">
                {data?.data?.prendstuDesComplementsAlimentaires}
              </p>
            </div>
            {data?.FichePackVipPremium ? (
              <div>
                <h3 className="question"> horaire de repas environ</h3>
                <p className="answer">
                  {data?.FichePackVipPremium?.horaireDeRepasEnviron}
                </p>
              </div>
            ) : null}

            {data?.FichePackStarter ? (
              <div>
                <h3 className="question"> horaire de repas environ</h3>
                <p className="answer">
                  {data?.FichePackStarter?.horaireDeRepasEnviron}
                </p>
              </div>
            ) : null}

            {data?.FichePackSpecifiqueNutritIion ? (
              <>
                <div>
                  <h3 className="question"> horaire de repas environ?</h3>
                  <p className="answer">
                    {data?.FichePackSpecifiqueNutritIion?.horaireDeRepasEnviron}
                  </p>
                </div>
                <div>
                  <h3 className="question">
                    Nombre d'entrainement que tu peux réaliser / semaine ?
                  </h3>
                  <p className="answer">
                    {
                      data?.FichePackSpecifiqueNutritIion
                        ?.nombreDEntrainementQueTuPeuxRealiserSemaine
                    }
                  </p>
                </div>
              </>
            ) : null}
          </div>
        </Card>
      </Col>
    </>
  );
}

export default Meal;
