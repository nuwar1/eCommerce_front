import React from 'react'
import useCart from '../../hooks/useCart';
import { CircularProgress, TableContainer, Typography, Table, TableCell, TableHead, TableBody, TableRow, Button, Container, Paper, Stack, Box } from '@mui/material';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import { Link } from 'react-router-dom';
import useUpdateCartItem from '../../hooks/useUpdateCartItem';

export default function Cart() {
  const { data, isError, isLoading } = useCart();
  const { mutate: removeItem, isPending } = useRemoveFromCart();
  const { mutate: updateItem, isPending: updateItemPending } = useUpdateCartItem();
  if (isLoading) return <CircularProgress />
  if (isError) return <Typography>error</Typography>
  const isEmpty = data.items.length === 0;
  if (isEmpty) {
    return (
      <Container maxWidth="xl" sx={{ p: 5, display: "grid", placeItems: "center" }}>
        <Stack spacing={3} alignItems="center" sx={{ maxWidth: 520, py: 5 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Your cart is currently empty.
          </Typography>
          <Button
            component={Link}
            to="/products"
            variant="outlined"
            sx={{
              borderColor: "#111827",
              color: "#111827",
              fontWeight: 800,
              px: 4,
              py: 1.2,
              borderRadius: 2,
              "&:hover": {
                bgcolor: "#111827",
                color: "#fff",
                borderColor: "#111827",
              },
            }}
          >
            Continue Shopping
          </Button>
        </Stack>
      </Container>
    );
  }
  const handleUpdate = (productId, action) => {
    const item = data.items.find(i => i.productId == productId);
    if (action == "-") {
      updateItem({ productId, count: item.count - 1 })
    }
    else {
      updateItem({ productId, count: item.count + 1 })
    }
  }
  console.log(data);
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Total</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.items.map(item => (
                <TableRow key={item.productId}>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell align="center">${item.price}</TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                      <Button
                        size="small"
                        variant="outlined"
                        color='#000'
                        sx={{
                          minWidth: 30, px: 0, "&:hover": {
                            bgcolor: "#000",
                            color: "#fff",
                          },
                        }}
                        onClick={() => handleUpdate(item.productId, "-")}
                        disabled={item.count <= 1}
                      >
                        -
                      </Button>
                      <Typography sx={{ minWidth: 30, textAlign: "center" }}>
                        {item.count}
                      </Typography>
                      <Button
                        size="small"
                        variant="outlined"
                        color='#000'
                        sx={{
                          minWidth: 30, px: 0, "&:hover": {
                            bgcolor: "#000",
                            color: "#fff",
                          },
                        }}
                        onClick={() => handleUpdate(item.productId, "+")}
                      >
                        +
                      </Button>
                    </Box>
                  </TableCell>
                  <TableCell align="center">${item.totalPrice}</TableCell>
                  <TableCell align="center">
                    <Button color='error' variant='outlined'
                      onClick={() => removeItem(item.productId)}>Remove</Button>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell align="center">
                  Cart Total: ${data.cartTotal}
                </TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  )
}
