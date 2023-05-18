import axios from 'axios'
import { Card, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        console.log(res.data);
        props.setLoaded(false);
      })
      .catch(err => console.log(err))
  }

  return (
    <Card>
      <Card.Header as='h3'>All Products</Card.Header>
      <Card.Body>
        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((product) => (
              <tr key={product._id}>
                <td className='align-middle'><Link to={`/products/${product._id}`}>{product.title}</Link></td>
                <td className='align-middle'>${product.price}</td>
                <td className='align-middle'>{product.description}</td>
                <td className='align-middle'>
                  <Link className='btn btn-primary me-2' to={`/products/${product._id}/edit`}>Update</Link>
                  <Button variant='danger' onClick={() => deleteHandler(product._id)} >Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default ProductList