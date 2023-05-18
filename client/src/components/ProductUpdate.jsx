import { useState, useEffect } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductUpdate = (props) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);

  const changeHandler = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8000/api/products/${id}`, product)
      .then((res) => {
        console.log(res);
        setProduct({
          title: '',
          price: '',
          description: '',
        });
        setErrors(null)
        navigate('/products');
      })
      .catch((err) => {
        console.log(err)
        setErrors(err?.response?.data?.errors)
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    product && (
      <Card className="mb-3">
        <Card.Header>
          <h1>Update Product</h1>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="title">Title:</Form.Label>
              <Form.Control
                type="text"
                onChange={changeHandler}
                value={product.title}
                name="title"
                id="title"
                className={`${errors?.title ? 'is-invalid' :''}`}
              />
              {errors?.title && <Form.Text className='text-danger'>{errors.title.message}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="price">Price:</Form.Label>
              <Form.Control
                type="number"
                onChange={changeHandler}
                value={product.price}
                name="price"
                id="price"
                className={`${errors?.price ? 'is-invalid' :''}`}
              />
              {errors?.price && <Form.Text className='text-danger'>{errors.price.message}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="description">Description:</Form.Label>
              <Form.Control
                type="text"
                onChange={changeHandler}
                value={product.description}
                name="description"
                id="description"
                className={`${errors?.description ? 'is-invalid' :''}`}
              />
              {errors?.description && <Form.Text className='text-danger'>{errors.description.message}</Form.Text>}
            </Form.Group>
            <Form.Group className="text-center">
              <Button type="submit">Update Product</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    )
  );
};
export default ProductUpdate;
