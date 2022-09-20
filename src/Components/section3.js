import { Row , Col, Button} from "react-bootstrap";

export default function Section3(){
    return(
        <div className="bg-brand py-5 ">
            <div className="container">
            <Row>
                <Col md={6} className="mx-auto  d-flex justify-content-center align-items-center  mx-auto">
                <img src="landing 3.png" className="img-fluid align-self-center" />
                </Col>
                <Col md={6}>
                    <article className="mb-5">
                        <h3>
                        <span className="text-warning">Specify </span>the time and day of One-on-one Classes                

                    </h3>
                    <p>Due to the availablity of our tutors in a variety of time slots that are tailored towars a students specific pace, our scheduling system enables students to easily make decisions on the time for lectures.</p>
                    </article>
                        <Button variant='dark'className="col-10 col-md-auto d-flex justify-content-center text-center align-self-center mx-auto">Get Started</Button>

                </Col >
            </Row>
            </div>
        </div>
    )
}