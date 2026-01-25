import React, { useState } from 'react'
import useCart from '../../hooks/useCart';
import { Box, CircularProgress, TableContainer, Typography, Table, TableCell, TableHead, TableBody, TableRow, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import useCheckout from '../../hooks/useCheckout';

export default function Checkout() {
    const { data, isError, isLoading } = useCart();
    const [paymentMethod, setPaymentMethod] = useState("Cash");
    const { mutate: checkout, isPending: isCheckoutPending, isError: isCheckoutError } = useCheckout();
    const handleCheckout = () => {
        checkout({ paymentMethod });
    };
    if (isLoading) return <CircularProgress />
    if (isError) return <Typography>error</Typography>
    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Box component="section" sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                pb: 3
            }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Quantity</TableCell>
                                <TableCell align="center">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.items.map(item => (
                                <TableRow key={item.productId}>
                                    <TableCell>{item.productName}</TableCell>
                                    <TableCell align="center">${item.price}</TableCell>
                                    <TableCell align="center">{item.count}</TableCell>
                                    <TableCell align="center">${item.totalPrice}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell align="center">
                                    Cart Total: ${data.cartTotal}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
                <FormControl fullWidth sx={{ maxWidth: 500 }}>
                    <InputLabel id="paymentMethodLabel">Payment Method</InputLabel>
                    <Select
                        labelId="paymentMethodLabel"
                        value={paymentMethod}
                        label="Payment Method"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <MenuItem value="Cash">Cash</MenuItem>
                        <MenuItem value="Visa">Card</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    sx={{
                        fontSize: { xs: 12, md: 16 },
                        minWidth: 150,
                        py: 1.6,
                        borderColor: "#111827",
                        bgcolor: "#111827",
                        color: "#fff",
                        fontWeight: 800,
                        "&:hover": {
                            bgcolor: "#e11d48",
                            color: "#fff",
                            borderColor: "#e11d48",
                        },
                    }}
                    onClick={handleCheckout}
                >
                    Pay Now
                </Button>
            </Box>
        </Container>
    )
}
