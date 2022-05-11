import {Container,Row,Col,Button} from "react-bootstrap";

const Intro = () => {
    return (
        <div className=" intro">
            <Container className="text-white text-center d-flex justify-content-center align-item-center ">
              <Row>
                <Col>
                <div className="title">NONTON GRATIS </div>
                <div className="title">GAK PAKE KARCIS</div>
                <div className="introBtn mt-4 text-center">
                    <Button variant="dark"> Lihat Semua</Button>
                </div>
                </Col>
              </Row>
            </Container>
          </div>
    )
}
export default Intro;