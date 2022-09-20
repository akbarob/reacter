import { Row , Col, Button} from "react-bootstrap";
import {MdOndemandVideo} from 'react-icons/md'

export default function LandingPage(){
    return(
        <div className="bg-brand py-5 ">
            <div className="container">
            <Row>
                <Col md={6}>
                    <article className="mb-5">
                        <h3>
                    Learn New Things To Become More <span className="text-success">Efficient.
                    </span>

                    </h3>
                    <p>Build skills with courses, certificates, and get online knowledge from our world-class platform</p>
                    </article>
                
                <Row >
                    <Col>
                        <Button variant='dark'className="col-10 col-md-auto d-flex justify-content-center text-center align-self-center mx-auto">Get Started</Button>
                    </Col>
                    <Col>
                    <Button variant="outline-success"> <MdOndemandVideo/>  Watch Tutorials</Button>
                    </Col>

                </Row>
            
                </Col >
                <Col md={6} className="mx-auto  d-flex justify-content-center align-items-center  mx-auto">
                <img src="landing 1.png" className="img-fluid align-self-center" />
                </Col>
            </Row>
            </div>
        </div>
    )
}