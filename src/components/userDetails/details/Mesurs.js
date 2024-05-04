import { Col, DatePicker } from "antd";
import { useEffect, useState, useCallback } from "react";
import { getToken } from "../../../utill/helpers";
import Loader from "../../loader";
import dayjs from "dayjs";

function Mesurs(data) {
  const [finalData, setFinalData] = useState(null);
  const [pickYear, setPickYear] = useState(null);
  const [selectMount, setSelectMounth] = useState(null);
  const [loader, setLoader] = useState(false);
  const mounths = [
    { key: "1", value: "J" },
    { key: "2", value: "F" },
    { key: "3", value: "M" },
    { key: "4", value: "A" },
    { key: "5", value: "M" },
    { key: "6", value: "J" },
    { key: "7", value: "J" },
    { key: "8", value: "A" },
    { key: "9", value: "S" },
    { key: "10", value: "O" },
    { key: "11", value: "N" },
    { key: "12", value: "D" },
  ];
  const API = process.env.REACT_APP_API;

  console.log(data);

  const processMeasure = useCallback(() => {
    if (data?.data?.data?.length > 0 && pickYear) {
      const byYearData = data?.data?.data.filter(
        (item) =>
          new Date(item?.attributes?.createdAt).getFullYear() === pickYear
      );

      const index = byYearData.findIndex(
        (item) =>
          new Date(item?.attributes?.createdAt).getTime() ===
          new Date(data?.row?.createdAt).getTime()
      );

      const exactindex = byYearData[index];
      const oneIndexBefore = byYearData[index - 1];

      const date = new Date(data.row.createdAt).getMonth() + 1;
      setSelectMounth(date.toString());

      const measureData = exactindex?.attributes?.measure;
      const beforeMeasure = oneIndexBefore?.attributes?.measure;

      setFinalData({
        brasD: measureData?.brasD,
        brasResultD: oneIndexBefore
          ? measureData?.brasD - beforeMeasure?.brasD
          : null,
        brasG: measureData?.brasG,
        brasResultG: oneIndexBefore
          ? measureData?.brasG - beforeMeasure?.brasG
          : null,
        molletsD: measureData?.molletsD,
        molletResultD: oneIndexBefore
          ? measureData?.molletsD - beforeMeasure?.molletsD
          : null,
        molletsG: measureData?.molletsG,
        molletResultG: oneIndexBefore
          ? measureData?.molletsG - beforeMeasure?.molletsG
          : null,
        cuissesD: measureData?.cuissesD,
        cuissesResultD: oneIndexBefore
          ? measureData?.cuissesD - beforeMeasure?.cuissesD
          : null,
        cuissesG: measureData?.cuissesG,
        cuissesResultG: oneIndexBefore
          ? measureData?.cuissesG - beforeMeasure?.cuissesG
          : null,
        fessiers: measureData?.fessiers,
        fessiersResult: oneIndexBefore
          ? measureData?.fessiers - beforeMeasure?.fessiers
          : null,
        taille: measureData?.taille,
        tailleResult: oneIndexBefore
          ? measureData?.taille - beforeMeasure?.taille
          : null,
        nombril: measureData?.nombril,
        nombrilResult: oneIndexBefore
          ? measureData?.nombril - beforeMeasure?.nombril
          : null,
        pectorauxPoitrine: measureData?.pectorauxPoitrine,
        pectorauxPoitrineResult: oneIndexBefore
          ? measureData?.pectorauxPoitrine - beforeMeasure?.pectorauxPoitrine
          : null,
        epaules: measureData?.epaules,
        epaulesResult: oneIndexBefore
          ? measureData?.epaules - beforeMeasure?.epaules
          : null,
      });
    }
  }, [data, pickYear]);

  const getByMounts = async (mount) => {
    const greater =
      new Date(pickYear ? dayjs(new Date(pickYear, 0)) : null).getFullYear() +
      "-01-01T00:00:00.000Z";
    const lessDate =
      new Date(pickYear ? dayjs(new Date(pickYear, 0)) : null).getFullYear() +
      "-12-29T23:59:59.999Z";
    const servey = data?.servey;
    const email = data?.row.email;

    try {
      setLoader(true);
      const response = await fetch(
        `${API}/${servey}?[filters][email][$eq]=${email}&[filters][createdAt][$gt]=${greater}&[filters][createdAt][$lt]=${lessDate}&populate=review&populate=measure`, // Assuming `servey` should be `survey`
        {
          headers: {
            authorization: `Bearer ${getToken()}`,
          },
        }
      );
      setLoader(false);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();

      if (data?.data?.length > 0 && pickYear) {
        const byYearData = data?.data?.filter(
          (item) =>
            new Date(item.attributes.createdAt).getFullYear() === pickYear
        );

        const index = byYearData.findIndex(
          (item) =>
            new Date(item.attributes.createdAt).getMonth() ===
            new Date(mount).getMonth()
        );

        setSelectMounth(mount);
        const exactindex = byYearData[index];
        const oneIndexBefore = byYearData[index - 1];
        const measureData = exactindex?.attributes?.measure;
        const beforeMeasure = oneIndexBefore?.attributes?.measure;

        setFinalData({
          brasD: measureData?.brasD,
          brasResult: oneIndexBefore
            ? measureData?.brasD - beforeMeasure?.brasD
            : null,
          brasG: measureData?.brasG,
          brasResultG: oneIndexBefore
            ? measureData?.brasG - beforeMeasure?.brasG
            : null,
          molletsD: measureData?.molletsD,
          molletResultD: oneIndexBefore
            ? measureData?.molletsD - beforeMeasure?.molletsD
            : null,
          molletsG: measureData?.molletsG,
          molletResultG: oneIndexBefore
            ? measureData?.molletsG - beforeMeasure?.molletsG
            : null,
          cuissesD: measureData?.cuissesD,
          cuissesResultD: oneIndexBefore
            ? measureData?.cuissesD - beforeMeasure?.cuissesD
            : null,
          cuissesG: measureData?.cuissesG,
          cuissesResultG: oneIndexBefore
            ? measureData?.cuissesG - beforeMeasure?.cuissesG
            : null,
          fessiers: measureData?.fessiers,
          fessiersResult: oneIndexBefore
            ? measureData?.fessiers - beforeMeasure?.fessiers
            : null,
          taille: measureData?.taille,
          tailleResult: oneIndexBefore
            ? measureData?.taille - beforeMeasure?.taille
            : null,
          nombril: measureData?.nombril,
          nombrilResult: oneIndexBefore
            ? measureData?.nombril - beforeMeasure?.nombril
            : null,
          pectorauxPoitrine: measureData?.pectorauxPoitrine,
          pectorauxPoitrineResult: oneIndexBefore
            ? measureData?.pectorauxPoitrine - beforeMeasure?.pectorauxPoitrine
            : null,
          epaules: measureData?.epaules,
          epaulesResult: oneIndexBefore
            ? measureData?.epaules - beforeMeasure?.epaules
            : null,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (data && data.data && data.data.data && data.data.data.length > 0) {
      const createdAtDate = new Date(
        data?.data?.data[0]?.attributes?.createdAt
      );
      setPickYear(createdAtDate.getFullYear());
      setSelectMounth(createdAtDate.getMonth());
    }
  }, [data]);

  useEffect(() => {
    processMeasure();
  }, [processMeasure]);

  return loader ? (
    <div className="center mt-25 mb-25">
      <Loader />
    </div>
  ) : (
    <>
      <Col span={24} md={600} className="mb-24 primaryCol">
        <h1 className="font-semibold center m-0 bt-20">Mesurments</h1>

        <div className="center trainingLoadsYear">
          <DatePicker
            placeholder="select Year"
            className="datepicker year"
            picker="year"
            value={pickYear ? dayjs(new Date(pickYear, 0)) : null}
            onChange={(date) => setPickYear(date ? date.year() : null)}
          />
        </div>
        <div className="months center measursMounths">
          {mounths.map((items) => (
            <span
              className={selectMount === items.key ? "selectedMounth" : null}
              onClick={() => getByMounts(items.key)}
            >
              {items.value}
            </span>
          ))}
        </div>
        <div className="tableContainer">
          {finalData && (
            <table className="table">
              <tbody>
                <tr>
                  <td>Mollets D</td>
                  <td>{finalData.molletsD}</td>
                  {finalData?.molletResultD && (
                    <td
                      className={finalData.molletResultD < 0 ? "danger" : null}
                    >
                      {finalData.molletResultD + "cm"}
                    </td>
                  )}
                  <td>Mollets G</td>
                  <td>{finalData.cuissesD}</td>
                  {finalData.molletResultG && (
                    <td
                      className={finalData.molletResultG < 0 ? "danger" : null}
                    >
                      {finalData.molletResultG + "cm"}
                    </td>
                  )}
                </tr>
                <tr>
                  <td>cuisses D</td>
                  <td>{finalData.cuissesD}</td>
                  {finalData.cuissesResultD && (
                    <td
                      className={finalData.cuissesResultD < 0 ? "danger" : null}
                    >
                      {finalData.cuissesResultD + "cm"}
                    </td>
                  )}
                  <td>cuisses G</td>
                  <td>{finalData.cuissesG}</td>
                  {finalData.cuissesResultG && (
                    <td
                      className={finalData.cuissesResultG < 0 ? "danger" : null}
                    >
                      {finalData.cuissesResultG + "cm"}
                    </td>
                  )}
                </tr>
                <tr>
                  <td>Fessiers</td>
                  <td>{finalData.fessiers}</td>
                  {finalData?.fessiersResult && (
                    <td
                      className={finalData.cuissesResult < 0 ? "danger" : null}
                    >
                      {finalData.fessiersResult + "cm"}
                    </td>
                  )}
                  <td>Taille</td>
                  <td>{finalData.taille}</td>
                  {finalData?.tailleResult && (
                    <td
                      className={finalData.tailleResult < 0 ? "danger" : null}
                    >
                      {finalData.tailleResult + "cm"}
                    </td>
                  )}
                </tr>
                <tr>
                  <td>Nombril</td>
                  <td>{finalData.nombril}</td>
                  {finalData?.nombrilResult && (
                    <td
                      className={finalData.nombrilResult < 0 ? "danger" : null}
                    >
                      {finalData.nombrilResult + "cm"}
                    </td>
                  )}
                  <td>Pectoraux (Poitrine)</td>
                  <td>{finalData.pectorauxPoitrine}</td>
                  {finalData?.pectorauxPoitrineResult && (
                    <td
                      className={
                        finalData.pectorauxPoitrineResult < 0 ? "danger" : null
                      }
                    >
                      {finalData.pectorauxPoitrineResult + "cm"}
                    </td>
                  )}
                </tr>

                <tr>
                  <td>Bras D</td>
                  <td>{finalData.brasD}</td>
                  {finalData?.brasResultD && (
                    <td className={finalData.brasResultD < 0 ? "danger" : null}>
                      {finalData.brasResultD + "cm"}
                    </td>
                  )}
                  <td>Bras G</td>
                  <td>{finalData.brasG}</td>
                  {finalData?.brasResultG && (
                    <td className={finalData.brasResultG < 0 ? "danger" : null}>
                      {finalData.brasResultG + "cm"}
                    </td>
                  )}
                </tr>
                <tr>
                  <td>Épaules</td>
                  <td>{finalData.epaules}</td>
                  {finalData?.epaulesResult && (
                    <td
                      className={finalData.epaulesResult < 0 ? "danger" : null}
                    >
                      {finalData.epaulesResult + "cm"}
                    </td>
                  )}

                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </Col>
    </>
  );
}

export default Mesurs;
