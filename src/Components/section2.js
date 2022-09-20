import { Row , Col, Button, Card} from "react-bootstrap";

 const Info =[
    {
        id:0,
        bg:'danger',
        title: 'One-on-one Tutoring ',
        text:'All of our Education Experts have experience and a degree in Special Education.',

    },
    {
        id:1,
        bg:'success',
        title: '24/7 Tutor Availability',
        text:'All of our Education Experts have experience and a degree in Special Education.',
    },
    {
        id:2,
        bg:'primary',
        title: 'Interactive Whiteboard',
        text:'Our digital whiteboard is equipped with audio-video chat features.',
    },
    {
        id:3,
        bg:'warning',
        title: 'Affordable Prices',
        text:'Courses offered at Coursee are relatively quite affordable for users.',
    }
]

function D (){
 const card = Info.map(item =>{
    console.log(item.name)
    return(
        <Card key={item.id} bg={item.bg} className="col-5 col-lg-3 mx-auto my-3 text-light shadow-sm border-2 border">
            <Card.Body>
                <h5>{item.title}</h5>
            <p>{item.text}</p>                
            <Button variant="outline-dark"> Read More</Button>
            </Card.Body>
        </Card>
    )
 })
 return(
    <div className="row">
        {card}
    </div>
 )
    
}

export default function Sec2(){
    return(
        <div className="bg-brand3">
            <div className="container py-3"> 
           <article>
            <h3>
                    Perks That Are Available To <span className="text-success">Learners!.</span>
                </h3>
                <p>Our Students are allowed the opportunity to experience some of these flexible features so they can be enabled to have a good work-life balance.</p>

           </article>
        
            <D/>
            </div>
        </div>
    )
}