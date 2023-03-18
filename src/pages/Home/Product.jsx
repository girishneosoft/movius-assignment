import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({ productName, thumbnail, description, price }) {
    return (
        <Card className='mt-2'>
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
                <Card.Title>{productName}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text><h6>₹{price}</h6></Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default Product;