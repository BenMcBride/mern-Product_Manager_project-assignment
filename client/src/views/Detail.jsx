import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Detail = (props) => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
  }, [id]);

  return (
    product &&
    <Card className='shadow'>
      <Card.Header as='h1'>Product Details</Card.Header>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Detail