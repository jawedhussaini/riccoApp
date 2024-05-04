import { Card, Col } from "antd";
import { BiHappyBeaming } from "react-icons/bi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { RiEmotionUnhappyLine } from "react-icons/ri";

function SommeilQualite(data) {
  return (
    <>
      <Col span={24} md={600} className="mb-24">
        <Card bordered={false}>
          <div className="info">
            <h1 className="font-semibold center m-0 bt-20">
              Ta qualité du sommeil ?:
            </h1>
            <div className="sleepIcons">
              <BiHappyBeaming
                size={40}
                color={ data?.data === "plus de 7h / nuit" ? "white" : null}
                className={
                  data?.data === "plus de 7h / nuit" ? "acceptedIcon" : null
                }
              />
              <HiOutlineEmojiHappy
                size={40}
                color={ data?.data === "Entre 5h-7h / nuit" ? "white" : null}
                className={
                  data?.data === "Entre 5h-7h / nuit" ? "acceptedIcon" : null
                }
              />
              <RiEmotionUnhappyLine
                size={40}
                color={ data?.data === "minus de 5h / nuit" ? "white" : null}
                className={
                  data?.data === "minus de 5h / nuit" ? "acceptedIcon" : null
                }
              />
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default SommeilQualite;
