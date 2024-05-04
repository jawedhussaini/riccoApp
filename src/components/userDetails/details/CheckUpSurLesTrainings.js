import { Card, Col } from "antd";

function CheckUpSurLesTrainig(data) {
  return (
    <>
      <Col span={24} md={600} className="mb-24">
        <Card bordered={false}>
          <div className="info">
            <h1 className="font-semibold bt-20">Check up sur les Trainings:</h1>
            <div>
              <h3 className="question">
                As-tu pu faire l'ensemble des séances ?
              </h3>
              <p className="answer">
                {data?.data?.asTuPuFaireLEnsembleDesSeances}
              </p>
            </div>
            <div>
              <h3 className="question">
                As-tu de bonnes sensations durant tes trainings ?
              </h3>
              <p className="answer">
                {data?.data?.asTuDeBonnesSensationsDurantTesTrainings}
              </p>
            </div>
            <div>
              <h3 className="question">Ressens-tu de la fatigue ?</h3>
              <p className="answer">{data?.data?.ressensTuDeLaFatigue}</p>
            </div>
            <div>
              <h3 className="question">
                Tes charges d'exercices augmentent-elles ?
              </h3>
              <p className="answer">
                {data?.data?.tesChargesDExercicesAugmententElles}
              </p>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default CheckUpSurLesTrainig;
