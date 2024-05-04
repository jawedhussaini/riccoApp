import { Card, Col } from "antd";

function ObjectFit(data) {
  return (
    <>
      <Col span={24} md={600} className="mb-24">
        <Card bordered={false}>
          <div className="info">
            <h1 className="font-semibold bt-20">Objectift:</h1>

            {data?.FichePackSpecifiqueNutritIion ? (
              <>
                <div>
                  <h3 className="question">Objectifs physiques et mental</h3>
                  <p className="answer">
                    {
                      data?.FichePackSpecifiqueNutritIion
                        ?.objectifsPhysiquesEtMental
                    }
                  </p>
                </div>
                <div>
                  <h3 className="question">
                    Comment te sens-tu actuellement psychologiquement ?{" "}
                  </h3>
                  <p className="answer">
                    {
                      data?.FichePackSpecifiqueNutritIion
                        ?.commentTeSensTuActuellementPsychologiquement
                    }
                  </p>
                </div>
                <div>
                  <h3 className="question">
                    Comment te sens-tu dans ta vie personnelle et
                    professionnelle?{" "}
                  </h3>
                  <p className="answer">
                    {
                      data?.FichePackSpecifiqueNutritIion
                        ?.commentTeSensTuDansTaViePersonnelleEtProfessionne
                    }
                  </p>
                </div>
                <div>
                  <h3 className="question">
                    As-tu des appréhensions ou craintes concernant ce coaching?{" "}
                  </h3>
                  <p className="answer">
                    {
                      data?.FichePackSpecifiqueNutritIion
                        ?.asTuDesApprehensionsOuCraintesConcernantCeCoaching
                    }
                  </p>
                </div>
                <div>
                  <h3 className="question">
                    Pourquoi souhaites-tu travailler avec moi ?{" "}
                  </h3>
                  <p className="answer">
                    {
                      data?.FichePackSpecifiqueNutritIion
                        ?.pourquoiSouhaitesTuTravaillerAvecMoi
                    }
                  </p>
                </div>
                <div>
                  <h3 className="question">Qu’attends-tu de ce coaching ? </h3>
                  <p className="answer">
                    {
                      data?.FichePackSpecifiqueNutritIion
                        ?.quAttendsTuDeCeCoaching
                    }
                  </p>
                </div>
                <div>
                  <h3 className="question">
                    Qu’est-ce qui te motive le plus ?{" "}
                  </h3>
                  <p className="answer">
                    {
                      data?.FichePackSpecifiqueNutritIion
                        ?.quEstCeQuiTeMotiveLePlus
                    }
                  </p>
                </div>
                <div>
                  <h3 className="question">
                    Qu’est-ce qui te décourage le plus ?{" "}
                  </h3>
                  <p className="answer">
                    {
                      data?.FichePackSpecifiqueNutritIion
                        ?.quEstCeQuiTeDeCourageLePlus
                    }
                  </p>
                </div>
              </>
            ) : null}

            {data?.FichePackVipPremium ? (
              <div>
                <h3 className="question"> Objectifs physique & mental : </h3>
                <p className="answer">
                  {data?.FichePackVipPremium?.objectifsPhysiqueMental}
                </p>
              </div>
            ) : null}

            {data?.FichePackStarter ? (
              <div>
                <h3 className="question"> Objectifs musculaires (physique) </h3>
                <p className="answer">
                  {data?.FichePackStarter?.objectifsMusculairesPhysique}
                </p>
              </div>
            ) : null}

            {data?.PackTrainingAthlete ? (
              <>
                {" "}
                <div>
                  <h3 className="question"> Tes Objectifs Athlétiques : </h3>
                  <p className="answer">
                    {data?.PackTrainingAthlete?.tesObjectifsAthletiques}
                  </p>
                </div>
                <div>
                  <h3 className="question"> Tes objectifs physiques </h3>
                  <p className="answer">
                    {data?.PackTrainingAthlete?.tesObjectifsPhysiques}
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

export default ObjectFit;
