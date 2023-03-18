import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from "./Product";
import productData from "./../../__mock__/products.json"

function Home() {
    return (
        <>
            <img src="/img/banner.jpg" alt="banner" className="img-fluid" />
            <Container className="mt-4 mb-4">
                <Row>
                    {productData.map((product) => (
                        <Col lg="4" sm="4" xs="12" md="4" ><Product {...product} /></Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Home;