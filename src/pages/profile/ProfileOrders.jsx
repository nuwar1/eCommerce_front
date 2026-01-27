import React from "react";
import {
  Box,
  Chip,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Divider,
} from "@mui/material";
import { useOutletContext } from "react-router-dom";

const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleString();
};

const StatusChip = ({ value }) => (
  <Chip
    size="small"
    label={value}
    sx={{
      fontWeight: 700,
      bgcolor: value === "Active" ? "rgba(34,197,94,0.14)" : "rgba(148,163,184,0.18)",
    }}
  />
);

export default function ProfileOrders() {
  const { profile } = useOutletContext();
  const orders = profile?.orders ?? [];

  return (
    <Paper variant="outlined" sx={{ borderRadius: 3, p: { xs: 2, md: 3 } }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 900 }}>
          Orders
        </Typography>
        <Chip label={`${orders.length} order(s)`} />
      </Box>

      {!orders.length ? (
        <Typography sx={{ color: "text.secondary" }}>No orders yet.</Typography>
      ) : (
        <>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <TableContainer sx={{ borderRadius: 2, border: "1px solid #e5e7eb" }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 900 }}>Order ID</TableCell>
                    <TableCell sx={{ fontWeight: 900 }}>Amount Paid</TableCell>
                    <TableCell sx={{ fontWeight: 900 }}>Payment</TableCell>
                    <TableCell sx={{ fontWeight: 900 }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 900 }}>Order Date</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {orders.map((o) => (
                    <TableRow key={o.id} hover>
                      <TableCell sx={{ fontWeight: 800 }}>{o.id}</TableCell>
                      <TableCell>${o.amountPaid}</TableCell>
                      <TableCell>
                        {o.paymentStatus} 
                      </TableCell>
                      <TableCell>
                        <StatusChip value={o.status} />
                      </TableCell>
                      <TableCell>{formatDate(o.orderDate)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box sx={{ display: { xs: "grid", md: "none" }, gap: 1.5 }}>
            {orders.map((o) => (
              <Paper key={o.id} variant="outlined" sx={{ borderRadius: 2, p: 1.5 }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Typography sx={{ fontWeight: 900 }}>{o.id}</Typography>
                  <StatusChip value={o.status} />
                </Stack>

                <Divider sx={{ my: 1.2 }} />

                <Stack spacing={0.8}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography sx={{ color: "text.secondary", fontSize: 13 }}>Amount Paid</Typography>
                    <Typography sx={{ fontWeight: 800 }}>${o.amountPaid}</Typography>
                  </Stack>

                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography sx={{ color: "text.secondary", fontSize: 13 }}>Payment</Typography>
                   {o.paymentStatus}
                  </Stack>

                  <Stack direction="row" justifyContent="space-between">
                    <Typography sx={{ color: "text.secondary", fontSize: 13 }}>Order Date</Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: 13 }}>
                      {formatDate(o.orderDate)}
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            ))}
          </Box>
        </>
      )}
    </Paper>
  );
}
