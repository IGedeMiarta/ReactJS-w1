import {Card, Container, Row, Col,Image} from "react-bootstrap";
import duneImg from "../assets/images/trending/dune.jpg";
import everything from "../assets/images/trending/everything.jpg";
import infinite from "../assets/images/trending/infinite.jpg";
import joker from "../assets/images/trending/joker.jpg";
import lightyear from "../assets/images/trending/lightyear.jpg";
import morbius from "../assets/images/trending/morbius.jpg";

const Trending = () => {
    return(
        <Container>
            <br/>
                <h1 className="text-white">TRENDING MOVIES</h1>
            <br/>
            <Row>
                <Col md={4} className="movieWraper" id="trending">
                    <Card className="bg-dark text-white movieImg">
                        <Image src={duneImg} alt="Dune Movie" className="trendingImg"/>
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
                        <Image src={everything} alt="Dune Movie" className="trendingImg"/>
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
                        <Image src={infinite} alt="Dune Movie" className="trendingImg"/>
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
                        <Image src={joker} alt="Dune Movie" className="trendingImg"/>
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
                        <Image src={lightyear} alt="Dune Movie" className="trendingImg"/>
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
                        <Image src={morbius} alt="Dune Movie" className="trendingImg"/>
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
export default Trending;