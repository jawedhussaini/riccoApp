import { Card, Col } from "antd";

function CheckUpDiet(data) {
  return (
    <>
      <Col span={24} md={600} className="mb-24">
        <Card bordered={false}>
          <div className="info">
            <h1 className="font-semibold bt-20">Check up on the Diet:</h1>
            <div>
              <h3 className="question">
                As-tu fais des écarts dans la semaine?
              </h3>
              <p className="answer">
                {data?.data?.asTuPuFaireLEnsembleDesSeances}
              </p>
            </div>
            <div>
              <h3 className="question">Si oui, quel écart as-tu fais ?</h3>
              <p className="answer">{data?.data?.siOuiQuelEcartAsTuFais}</p>
            </div>
            <div>
              <h3 className="question">
                Arrives-tu à manger toutes les quantités ?
              </h3>
              <p className="answer">
                {data?.data?.arrivesTuAMangerToutesLesQuantites}
              </p>
            </div>
            <div>
              <h3 className="question">
                Si non, à quel moment de la journée as-tu du mal à tout manger ?
              </h3>
              <p className="answer">
                {data?.data?.siNonAQuelMomentDeLaJourneeAsTuDuMalAToutManger}
              </p>
            </div>
            <div>
              <h3 className="question">Ressens-tu la faim ?</h3>
              <p className="answer">{data?.data?.ressensTuLaFaim}</p>
            </div>
            <div>
              <h3 className="question">
                Si oui, à quel moment de la journée as-tu faim ?
              </h3>
              <p className="answer">
                {data?.data?.siOuiAQuelMomentDeLaJourneeAsTuFaim}
              </p>
            </div>
            <div>
              <h3 className="question">As-tu des problèmes de digestion ?</h3>
              <p className="answer">
                {data?.data?.asTuDesProblemesDeDigestion}
              </p>
            </div>
            <div>
              <h3 className="question">Vas-tu aux toilettes régulierement ?</h3>
              <p className="answer">
                {data?.data?.vasTuAuxToilettesRegulierement}
              </p>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default CheckUpDiet;
