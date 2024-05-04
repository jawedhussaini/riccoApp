import { Card, Col } from "antd";
import { useContext, useState } from "react";
import { GloblaContext } from "../../../context";
import ImageModal from '../ImageModal'

function Photos(data) {
   const { imageModal, setImageModal } = useContext(GloblaContext);
   const [imgeForModal, setImageForModal] = useState(null);
   const API = process.env.REACT_APP_IMAGES_API;
  
  return (
    <>
         
      <Col span={24} md={600} className="mb-24">
       

        <Card
          bordered={false}
        >
         <h1 className="font-semibold bt-20">Photos:</h1>
         <div className="PhotosContainer">
             <div className="Photos">
                <h1>Profile:</h1>
                <div ><img className="photo" onClick={()=>{setImageForModal(`${data.profile}`);setImageModal(true)}} alt="img" src={`${data.profile}`}/></div>
            </div>
            <div className="Photos">
                <h1>Back:</h1>
                <div ><img className="photo" onClick={()=>{setImageForModal(`${data.back}`);setImageModal(true)}} alt="img" src={`${data.back}`}/></div>
            </div>
          
             <div className="Photos">
                <h1>Front:</h1>
                <div><img className="photo" onClick={()=>{setImageForModal(`${data.front}`);setImageModal(true)}} alt="img" src={`${data.front}`}/></div>
            </div>
         </div>
         {imageModal && <ImageModal image={imgeForModal}/>}
       
        </Card>
      </Col>
    </>
  );
}

export default Photos;
