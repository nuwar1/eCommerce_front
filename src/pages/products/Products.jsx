import React from 'react'
import PageHeader from '../../components/page-header/PageHeader'
import { Container } from "@mui/material";
import ProductsSection from './ProductsSection';

export default function Products() {

  return (
    <>
      <PageHeader
        title="Products"
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Products" },
        ]}
      />
      <Container maxWidth="xl">
        <ProductsSection />
      </Container>

    </>
  )
}
