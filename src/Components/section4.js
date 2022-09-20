import {Row, Col, Card, Button} from 'react-bootstrap'
export default function Section4(){
    return(
        <div className=' bg-brand3'>
            <div className='container py-3'>
                <Row>
                <Col xs={10}>
                    <article>
                        <h3>Our Popular <span className="text-success">Courses</span></h3>
                        <p>Here is a look at some of our popular courses on Coursee.</p>
                    </article>
                </Col>
                <Col>
                    <a>See More...</a>
                </Col>
            </Row>
            <Courses/>
            </div>
           
        </div>
    )
}

function Courses(){
    const card = Info.map(item =>{
        console.log(item.name)
        return(
            <Card key={item.id} bg={item.bg} className="col-8 mx-auto my-3 text-light shadow-sm border-2 border">
                <Card.Img src={item.img}/>
                <Card.Body>

                    <h5>{item.title}</h5>
                <p>{item.text}</p>   
                <h6>{item.lesson}</h6> <h6>{item.time}</h6>
                <h6>{item.stars}</h6>
                <hr/>
                <h5>{item.price}</h5>             
                </Card.Body>
                
            </Card>
        )
     })
     return(
        <div className="">
            {card}
        </div>
     )
        
}
const Info =[
    {
        id:0,
        bg:'danger',
        img:'',
        title: 'Introduction to React',
        lesson: '20 Modules & 2 Projects',
        stars:'⭐⭐⭐⭐⭐  155 Reviews',
        price: '$275',
        time:'20hrs'

    },
    {
        id:1,
        bg:'success',
        img:'',
        title: 'React Hooks',
        lesson: '30 Modules & 2 Projects',
        stars:'⭐⭐⭐⭐⭐  95 Reviews',
        price: '$175',
        time:'20hrs'



    },
    {
        id:2,
        bg:'primary',
        img:'',
        title: 'Advance React',
        lesson: '15 Modules & 2 Projects',
        stars:'⭐⭐⭐⭐⭐  235 Reviews',
        price: '$150',
        time:'20hrs'


    },
    
]