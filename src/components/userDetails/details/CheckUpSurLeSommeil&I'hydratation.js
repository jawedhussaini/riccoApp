import { Col } from "antd";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";

function CheckUpSommeilAndHudration(data) {
  return (
    <>
      <Col span={24} md={600} className="mb-24">
        <div className="HAndSContainer">
          <div className="HAndS">
            <MdOutlineWaterDrop size={35} color="white" />
            <h1 className="center">Hydration</h1>
            <h2 className="HandSValue">{data?.data}</h2>
          </div>
        </div>
      </Col>
    </>
  );
}

export default CheckUpSommeilAndHudration;
