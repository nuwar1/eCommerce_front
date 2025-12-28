import React from 'react'
import PageHeader from '../../components/page-header/PageHeader'

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
    </>
  )
}
