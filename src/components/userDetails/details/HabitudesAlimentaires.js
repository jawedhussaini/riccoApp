import { Card, Col } from "antd";

function HeatingHabites(data) {
  return (
    <>
      <Col span={24} md={600} className="mb-24">
        <Card bordered={false}>
          <div className="info">
            <h1 className="font-semibold bt-20">Habitudes Alimentaires:</h1>

            {data?.FichePackSpecifiqueNutritIion ? (
              <>
                <div>
                  <h3 className="question">
                    As-tu déjà souffert ou souffres-tu de TCA tels qu’anorexie,
                    boulimie ou hyperphagie ?{" "}
                  </h3>
                  <p className="answer">
                    {
                      data?.FichePackSpecifiqueNutritIion
                        ?.asTuDeJaSouffertOuSouffresTuDeTcaTelsQuAnorexieBoulimieOuHyperphagie
                    }
                  </p>
                </div>
                <div>
                  <h3 className="question">
                    Connais-tu tes apports actuels en macronutriments ? Si oui,
                    quels sont-ils ?
                  </h3>
                  <p className="answer">
                    {
                      data?.FichePackSpecifiqueNutritIion
                        ?.connaisTuTesApportsActuelsEnMacronutrimentsSiOuiQuelsSontIls
                    }
                  </p>
                </div>
                <div>
                  <h3 className="question">
                    As-tu déjà suivi un ou des régimes spécifiques ? Si oui, le
                    ou lesquels ? Quand et pendant combien de temps ?{" "}
                  </h3>
                  <p className="answer">
                    {
                      data?.FichePackSpecifiqueNutritIion
                        ?.asTuDeJaSuiviUnOuDesReGimesSpeCifiquesSiOuiLeOuLesquelsQuandEtPendantCombienDeTemps
                    }
                  </p>
                </div>
                <div>
                  <h3 className="question">
                    si oui : Quand grignotes-tu et quels aliments :
                  </h3>
                  <p className="answer">
                    {
                      data?.FichePackSpecifiqueNutritIion
                        ?.siouiQuandgrignotestuetquelsaliments
                    }
                  </p>
                </div>
              </>
            ) : null}
            <div>
              <h3 className="question">Grignotages?</h3>
              <p className="answer">{data?.data?.grignotages}</p>
            </div>
            <div>
              <h3 className="question">Fast Food</h3>
              <p className="answer">{data?.data?.fastFood}</p>
            </div>
           
            <div>
              <h3 className="question">Alcool</h3>
              <p className="answer">{data?.data?.alcool}</p>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default HeatingHabites;
