import React from "react"
import { Col, Row } from "reactstrap"
import { ProductType } from "../services/products"
import ProductCard from "./ProductCard"

type ProductsListProps = {
  products: ProductType[]
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {

  return (
    <>
      <Row className="g-5">
        {products.map(product => (
          <Col md={6} lg={4} xl={3} key={product.id}>
            <ProductCard 
              product={product}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default ProductsList