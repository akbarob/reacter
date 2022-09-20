import { Col, Form, FormGroup, Row , Button} from "react-bootstrap"
import {BsFacebook,BsLinkedin,BsTwitter} from 'react-icons/bs'
import {BiShareAlt} from 'react-icons/bi'


export default function Footer(){
    return(
        <div className="bg-brand">
            
            <footer className="container py-3">
                <Mail/>
                <hr/>
                <Row>
                    <Col xs={12} md={3} className='text-center pb-3'>
                    <h3><strong> <BiShareAlt/>Reacter</strong></h3>
                        <p>Solution for easy and flexible online learning, you can studt anywhere at your <span className="text-danger">convenience</span></p>
                        <Button variant="outline-primary" className="mx-1"><BsFacebook /> </Button>
                        <Button variant="outline-primary" className=""><BsLinkedin /></Button>
                        <Button variant="outline-primary" className="mx-1"><BsTwitter/></Button>
                        
                        


                    </Col>

                    <Col>
                    <Row>
                        <Col>
                        <h4>Community</h4>
                        <ul className="list-unstyled">
                            <li>Team Plans</li>
                            <li>Blog</li>
                            <li>Students</li>
                            <li>Scholarhips</li>
                        </ul>
                        </Col>
                        
                        <Col><h4>Programs</h4>
                        <ul className="list-unstyled">
                            <li>Learning</li>
                            <li>Certification</li>
                            <li>Partners</li>
                            <li>Watch Videos</li>
                        </ul>
                        </Col>
                        <Col>
                        <h4>Company</h4>
                        <ul className="list-unstyled">
                            <li>About</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Social Impacts</li>
                        </ul>
                        </Col>
                    </Row>
                    </Col>

                </Row>
                <div className='text-center py-3'>
            <span>Made with 🤎 by Akbar Badmus</span> <br/>
            akbarbadmus ™️ 2022.
        </div>
            </footer>
        </div>

    )
}

function Mail(){
    return(
        <div className="my-5">
            <article className="text-center">
                <h4>Enter your email to  get our latest <span className="text-warning">updates </span>on our services and Courses</h4>
                <h6 className="text-mute"><small>You will get notifications about the latest coursee news</small></h6>
                <Form className="py-3">
                        <Col xs={10}  className='text-center mx-auto  col-md-5 my-2 ' ><FormGroup>
                            <Form.Control type="email" placeholder="Enter your email address" />
                            </FormGroup>
                        </Col>
                        <Col xs={2} md={8}className='text-center mx-auto my-2'>
                            <Button variant="success" type="submit">Submit</Button>
                        </Col>
                        
                </Form>
            </article>

        </div>
    )
}