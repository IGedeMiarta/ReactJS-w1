import {Card, Container, Row, Col,Image} from "react-bootstrap";
import atmanImg from "../assets/images/superhero/antman.jpg";
import avengerimg from "../assets/images/superhero/avenger.jpg";
import batmanImg from "../assets/images/superhero/batman.jpg";
import robinhoodImg from "../assets/images/superhero/robinhood.jpg";
import spiderman from "../assets/images/superhero/spiderman-cover.jpg";
import superman from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
    return(
        <Container>
            <br/>
                <h1 className="text-white">SUPERHERO MOVIES</h1>
            <br/>
            <Row>
                <Col md={4} className="movieWraper" id="superhero">
                    <Card className="bg-dark text-white movieImg">
                        <Image src={atmanImg} alt="Dune Movie" className="trendingImg"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    
                            </div>
                        </div>
                        
                    </Card>
                </Col>
                <Col md={4} className="movieWraper">
                    <Card className="bg-dark text-white movieImg">
                        <Image src={avengerimg} alt="Dune Movie" className="trendingImg"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    
                            </div>
                        </div>
                        
                    </Card>
                </Col>
                <Col md={4} className="movieWraper">
                    <Card className="bg-dark text-white movieImg">
                        <Image src={batmanImg} alt="Dune Movie" className="trendingImg"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    
                            </div>
                        </div>
                        
                    </Card>
                </Col>
                <Col md={4} className="movieWraper">
                    <Card className="bg-dark text-white movieImg">
                        <Image src={robinhoodImg} alt="Dune Movie" className="trendingImg"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    
                            </div>
                        </div>
                        
                    </Card>
                </Col>
                <Col md={4} className="movieWraper">
                    <Card className="bg-dark text-white movieImg">
                        <Image src={spiderman} alt="Dune Movie" className="trendingImg"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    
                            </div>
                        </div>
                        
                    </Card>
                </Col>
                <Col md={4} className="movieWraper">
                    <Card className="bg-dark text-white movieImg">
                        <Image src={superman} alt="Dune Movie" className="trendingImg"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    
                            </div>
                        </div>
                        
                    </Card>
                </Col>
            </Row>
        </Container>
       
    )
}
export default Superhero;