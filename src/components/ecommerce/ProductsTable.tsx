import React, { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { FaUserEdit, FaTrash } from "react-icons/fa";

import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridRowId,
  GridToolbar,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { productsData } from "../../utils/data";

const ProductsTable = ({ columns, rows, slug }) => {
  const [data, setData] = useState(productsData);

  const handleDelete = (id) => {
    console.log(id, "deleted");
    const newdata = rows.filter((row) => row.id !== id);

    return setData(newdata);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "action",
    headerAlign: "center",

    width: 120,
    renderCell: (params) => {
      return (
        <div className="table-action">
          <Link to={`/${slug}/${params.row.id}`}>
            <BsFillEyeFill />
          </Link>
          <span>
            <FaUserEdit />
          </span>

          <span onClick={() => handleDelete(params.row.id)}>
            <FaTrash />
          </span>
        </div>
      );
    },
  };

  return (
    <Wrapper>
      <Box sx={{ height: 515, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={[...columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 7,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[7]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
        />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;

  .MuiInput-input {
    font-size: 1.3rem;
    color: #908e8e;
  }

  .MuiInput-root {
    padding: 0.3rem;
    border: 1px solid #cccccc63;
    border-radius: var(--rounded-lg);
    outline: var(--outline);

    &::after {
      display: none;
    }

    &::before {
      display: none;
    }
  }

  .MuiDataGrid-cell {
    font-size: 1.3rem;
    text-transform: capitalize;
  }

  .MuiDataGrid-cell--withRenderer {
    /* min-width: auto !important; */
  }

  .MuiDataGrid-columnHeaderTitle {
    font-size: 1.1rem;
    font-weight: 550;
    text-transform: capitalize;
  }

  .MuiDataGrid-overlay {
    background: var(--white);
  }
  .css-5wly58-MuiDataGrid-root {
    border: none !important;
  }

  .MuiDataGrid-main {
    color: #9c9c9c;

    img {
      width: 3rem;
      height: 3rem;
      object-fit: cover;
      border-radius: var(--rounded-full);
    }
  }

  .MuiDataGrid-overlay {
    font-size: 1.8rem;
  }

  .product {
    display: flex;
    align-items: center;
    gap: 2rem;
    /* width: 40rem; */
  }

  .product-name {
    font-size: 1.5rem;
    color: var(--gray-200);
    font-weight: 400;
  }

  .MuiTablePagination-displayedRows {
    color: var(--gray-100);
    font-size: 1.2rem;
  }
  .table-action {
    display: flex;
    gap: 3rem;
    align-items: center;
    svg {
      cursor: pointer;
      color: var(--gray-100);
    }
  }
`;

export default ProductsTable;
