import { styled } from "styled-components";
import SingleProduct from "./SingleProduct";
import { BsPlus } from "react-icons/bs";
import ProductsTable from "./ProductsTable";
import React, { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { productsData } from "../../utils/data";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";

const columns: GridColDef[] = [
  {
    field: "img",
    headerName: "Product",
    width: 400,
    renderCell: (params) => {
      return (
        <div className="product">
          <img
            src={
              params.row.img ||
              "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/alchimia-chair.jpg"
            }
            alt={params.row.name}
          />

          <h3 className="product-name">{params.row.name}</h3>
        </div>
      );
    },
  },
  {
    field: "category",
    headerName: "category",
    width: 120,
    editable: true,
  },
  {
    field: "price",
    headerName: "price",
    width: 100,
    renderCell: (params) => {
      return <div className="">{formatPrice(params.row.price)}</div>;
    },
  },
  {
    field: "quantity",
    headerName: "quantity",
    type: "number",
    width: 70,
  },
  {
    field: "status",
    headerName: "status",
    headerAlign: "center",
    type: "number",
    width: 120,
    renderCell: (params) => {
      return (
        <div className={`status ${params.row.status}`}>{params.row.status}</div>
      );
    },
  },
];

const ProductsContainer = () => {
  return (
    <Wrapper>
      <div className="product-header">
        <h1 className="prod-head">All Products</h1>

        <div className="prod-btnContainer">
          <Link to="/new-product" className="btn-primary btn-main btn-prod">
            <BsPlus /> New Products
          </Link>

          <span className="btn-primary btn-header">Import</span>

          <span className="btn-primary btn-header">Export</span>
        </div>
      </div>

      <ProductsTable slug="product" columns={columns} rows={productsData} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--white);
  border-radius: 12px;
  padding: 1rem;
  margin-top: 3rem;

  .product-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .prod-head {
    font-size: 1.8rem;
    font-weight: 535;
    color: var(--gray-200);
  }

  .prod-btnContainer {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .btn-prod {
    display: flex;
    gap: 0.7rem;
    align-items: center;

    svg {
      color: #fff;
      font-size: 1.3rem;
    }
  }
  .btn-header {
    border: 1px solid #ec4899;
    background: linear-gradient(#ec4899, #f27c90);
    -webkit-background-clip: text;
  }

  .product-table {
    margin-top: 3rem;
  }

  .status {
    text-align: center;
  }
`;

export default ProductsContainer;
