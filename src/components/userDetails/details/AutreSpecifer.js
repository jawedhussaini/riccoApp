import { Card, Col } from "antd";

function AutreSpercifer(data) {
  return (
    <>
      <Col span={24} md={600} className="mb-24">
       

        <Card
          bordered={false}
       
        >
            <div className="info">
        <h1 className="font-semibold bt-20">Autre élément à me spécifier :</h1>
        <div>
            <h3 className="question">Exprime ta routine, tes besoins</h3>
            <p className="answer">{data?.data}</p>
        </div>
        
        
         

        </div>
         
        
        </Card>
      </Col>
    </>
  );
}

export default  AutreSpercifer;
