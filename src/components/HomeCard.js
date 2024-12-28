import '../css/HomeCard.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function HomeCard({handleSubmit}) {
    return (
        <div className='center'>
            <Card className="card">
                <Card.Title className="card-title">Weather App</Card.Title>
                <hr />
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control type="input" name="cityName" placeholder="Enter city name"/>
                        <br />
                        <Button variant="primary" type="submit" className="formButton">
                            Go
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default HomeCard;