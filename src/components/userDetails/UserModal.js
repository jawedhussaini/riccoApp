import { useContext } from "react";

import { GloblaContext } from "../../context";

import Loader from "../loader";

import Personal from "./details/Personal";

import Medicen from "./details/AntécédentsMédicaux";
import HeatingHabites from "./details/HabitudesAlimentaires";
import Meal from "./details/PriseDeRepas";
import ObjectFit from "./details/Objectifs";
import Sport from "./details/SportsPratiqués";
import TonHistory from "./details/TONHISTOIRE";
import Gem from "./details/SalleDeSport";
import Exprimetaroutinetesbesoins from "./details/Exprimetaroutinetesbesoins";
import Mesurs from "./details/Mesurs";
import Photos from "./details/Photos";
import CheckUpSommeilAndHudration from "./details/CheckUpSurLeSommeil&I'hydratation";
import CheckUpDiet from "./details/CheckUpDiet";
import CheckUpSurLesTrainig from "./details/CheckUpSurLesTrainings";
import CheckUpHormonal from "./details/CheckUpHormonal";
import CheckUpPhysique from "./details/CheckUpPhysiqueAndPsychologique";
import SommeilQualite from "./details/SommeilQualite";
import AutreSpercifer from "./details/AutreSpecifer";
import LineChart from "../charts/LineChart";
import FichMesurs from "./details/FichMeausur";
import TrainingLoads from "./details/TrainingLoad";

function UserModal({ graphData, table, data,servey }) {
  const { setUserDetailsModel, loaders } = useContext(GloblaContext);
  const tableData=data?.data?.attributes
const tableNames=
{
  table1:"BILAN MENSUEL PACK VIP PREMIUM",
  table2:"BILAN MENSUEL PACK STARTER",
  table3:"BILAN MENSUEL PACK NUTRITION",
  table4:"FICHE PACK STARTER",
  table5:"FICHE PACK VIP PREMIUM",
  table6:"PACK TRAINING ATHLÈTE",
  table7:"FICHE PACK SPÉCIFIQUE NUTRITION",
}


 

  return (
    <>
      <div className="userModel">
        <div class="outer" onClick={() => setUserDetailsModel(false)}>
          <div class="inner">
            <label className="closeLable">Close</label>
          </div>
        </div>

        {loaders ? (
          <Loader />
        ) : (
          <div className="userModelContainer">
            <h1 className="title">{table}</h1>

            <div className="CartsContainer">
              <div>
                {(tableData?.review ||
                  tableData?.civility) &&
                  tableData?.nom &&
                  data?.data?.attributes.prenom &&
                  tableData?.email && (
                    <Personal
                      civility={tableData?.civility}
                      nom={tableData?.nom}
                      prenom={tableData?.prenom}
                      email={tableData?.email}
                      profile={tableData?.measure?.photoDeProfil}
                      table={table}
                      disciplineSportive={
                        tableData?.PackTrainingAthlete
                          ?.disciplineSportive
                      }
                      review={tableData?.review}
                    />
                  )}
                {tableData?.PackTrainingAthlete && (
                  <TonHistory
                    data={
                      tableData?.PackTrainingAthlete
                        ?.raconteMoiTonParcoursEnQuelquesLignes
                    }
                  />
                )}
                {tableData?.gym && (
                  <Gem data={tableData?.gym} />
                )}
                {tableData?.FichePackSpecifiqueNutritIion && (
                  <Exprimetaroutinetesbesoins
                    data={
                      tableData?.FichePackSpecifiqueNutritIion
                        ?.exprimeTaRoutineTesBesoins
                    }
                  />
                )}
                {tableData?.review && (
                  <SommeilQualite
                    data={
                      tableData?.review
                        ?.combienDHeuresDeSommeilDorsTu
                    }
                  />
                )}
                {tableData?.FichePackSpecifiqueNutritIion && (
                  <AutreSpercifer
                    data={
                      tableData?.FichePackSpecifiqueNutritIion
                        ?.exprimeTaRoutineTesBesoins
                    }
                  />
                )}
              </div>

              <div>
                {tableData?.review && graphData && (
                  <LineChart graphData={graphData} row={tableData?.email} servey={servey}  />
                )}
                {tableData?.sport && (
                  <Medicen data={tableData?.Medical} />
                )}
                 {tableData?.eat && (
                  <CheckUpSommeilAndHudration
                    data={tableData?.eat?.hydratation}
                  />
                )}
                { (
                  <Photos profile={tableData?.measure?.photoDeProfil} front={tableData?.measure?.photoDeFace} back={tableData?.measure?.photoDeDos} />
                )}

                {data?.tableData?.sport && (
                  <Sport
                    data={tableData?.sport}
                    quelPosteTuOccupes={
                      tableData?.PackTrainingAthlete
                        ?.quelPosteTuOccupes
                    }
                  />
                )}
               
                {tableData?.review && (
                  <CheckUpDiet data={tableData?.review} />
                )}
              </div>
              <div>
                {(table===tableNames.table1 || table===tableNames.table2 || table===tableNames.table3) ? (
                  <Mesurs data={graphData} row={data?.data?.attributes} servey={servey} />
                ): null}
                 {(table===tableNames.table4 || table===tableNames.table5 || table===tableNames.table6 || table===tableNames.table7 ) ? (
                  <FichMesurs data={tableData?.measure}  />
                ):null}
                {tableData?.eat && (
                  <HeatingHabites
                    data={tableData?.eat}
                    FichePackSpecifiqueNutritIion={
                      data?.attributes?.FichePackSpecifiqueNutritIion
                    }
                  />
                )}
                {tableData?.meal && (
                  <Meal
                    data={tableData?.meal}
                    FichePackStarter={tableData?.FichePackStarter}
                    FichePackSpecifiqueNutritIion={
                      tableData?.FichePackSpecifiqueNutritIion
                    }
                    FichePackVipPremium={
                      tableData?.FichePackVipPremium
                    }
                  />
                )}
                {(tableData?.PackTrainingAthlete ||
                  tableData?.FichePackSpecifiqueNutritIion ||
                  tableData?.FichePackVipPremium ||
                  tableData?.FichePackStarter) && (
                  <ObjectFit
                    PackTrainingAthlete={
                      tableData?.PackTrainingAthlete
                    }
                    FichePackSpecifiqueNutritIion={
                      tableData?.FichePackSpecifiqueNutritIion
                    }
                    FichePackVipPremium={
                      tableData?.FichePackVipPremium
                    }
                    FichePackStarter={tableData?.FichePackStarter}
                  />
                )}

                {tableData?.review && (
                  <CheckUpSurLesTrainig data={tableData?.review} />
                )}
                {tableData?.review && (
                  <CheckUpHormonal data={tableData?.review} />
                )}
                {tableData?.review && (
                  <CheckUpPhysique data={tableData?.review} />
                )}
                    {(table==="BILAN MENSUEL PACK VIP PREMIUM" | table==="BILAN MENSUEL PACK STARTER" | table==="BILAN MENSUEL PACK NUTRITION") ? (
                  <TrainingLoads email={tableData?.email}/>
                ): null}
                
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UserModal;

