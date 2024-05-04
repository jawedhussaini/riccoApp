import { Card, Col } from "antd";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail, MdOutlineWaterDrop } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";

function Personal(data) {
 
  return (
    <>
      <Col span={24} md={600} className="mb-24">
        <Card bordered={false} className="carts">
          {(data.table==="CHECK UP HEBDOMADAIRE PACK VIP" | data.table==="CHECK UP BI-MENSUEL PACK STARTE") ? null :(
          <div className="center">
            <img className="profile" alt="Img" src={`${data.profile}`} />
          </div> 
          )
        }
        
          <h1 className="font-semibold center m-0 bt-20">
            {data?.nom} {data?.prenom}
          </h1>
          {data?.civility ? (
            <h1 className="font-semibold center m-0 bt-20">
              {data?.civility?.activiteProfessionnelle}
            </h1>
          ) : null}

          {data?.disciplineSportive ? (
            <h1 className="font-semibold center m-0 bt-20">
              {" "}
              {data?.disciplineSportive}
            </h1>
          ) : null}
          <table className="cartTable center">
            <tbody>
              {data?.civility ? (
                <tr>
                  <td className="cartTableTD">
                    <div className="profLogo">
                      <IoCallOutline size={15} color="white" />
                    </div>
                  </td>
                  <td className="">
                    <h4 className="profileLogoText">
                      {data?.civility?.numeroDeTelephone}
                    </h4>
                  </td>
                </tr>
              ) : null}

              <tr>
                <td className="cartTableTD">
                  <div className="profLogo">
                    <MdOutlineMail size={15} color="white" />
                  </div>
                </td>
                <td className="cartTableTD">
                  <h4 className="profileLogoText">{data?.email}</h4>
                </td>
              </tr>
              {data?.review ? (
                <tr>
                  <td className="cartTableTD">
                    <div className="profLogo">
                      <GiWeight size={15} color="white" />
                    </div>
                  </td>
                  <td className="cartTableTD">
                    <h4 className="profileLogoText">
                      {data?.review?.PoidsAJeun}
                    </h4>
                  </td>
                </tr>
              ) : null}

              {data?.civility ? (
                <>
                  <tr>
                    <td className="cartTableTD">
                      <div className="profLogo">
                        <IoLocationOutline size={15} color="white" />
                      </div>
                    </td>
                    <td className="cartTableTD">
                      <h4 className="profileLogoText">
                        {data?.civility?.ville} {data?.civility?.postalCode}
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td className="cartTableTD">
                      <div className="profLogo">
                        <AiOutlineUser size={15} color="white" />
                      </div>
                    </td>
                    <td className="cartTableTD">
                      <h4 className="profileLogoText">
                        {data?.civility?.sexe}
                      </h4>
                    </td>
                  </tr>
                </>
              ) : null}
            </tbody>
          </table>
          {data?.civility ? (
            <table className="center sizeInfo">
              <tbody>
              <tr className="titles">
                <td><h1>Age</h1></td>
                <td><h1>Wieght</h1></td>
                <td><h1>Height</h1></td>
              </tr>
              <tr className="valueOfTitles">
                <td><h1 className="center">{data?.civility?.age}</h1></td>
                <td><h1 className="center">{data?.civility?.poidsActuel}</h1></td>
                <td><h1 className="center">{data?.civility?.taille}</h1></td>
              </tr>
              </tbody>
            </table>
          ) : null}
          {data?.review ? (
            <>
              <div className="HAndS center mb-2 mt-2">
                <MdOutlineWaterDrop size={40} color="white" />
                <h1 className="center">Hydration</h1>
                <h2 className="HandSValue">
                  {data?.review?.combienDeLitresDEauJour}
                </h2>
              </div>
              <div className="HAndS">
                <FaRegClock size={40} color="white" />
                <h1 className="center">sommeil</h1>
                <h2 className="HandSValue">
                  {data?.review?.combienDHeuresDeSommeilDorsTu}
                </h2>
              </div>
            </>
          ) : null}
        </Card>
      </Col>
    </>
  );
}

export default Personal;
