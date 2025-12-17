import React, { useEffect, useState } from "react";
import axiosInstance from "../../API/axiosInstance";
import { Paper, List, ListItemButton, ListItemText, Box, Typography, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export default function Categories() {

  const fetchCategories = async()=>{
      const response = await axiosInstance.get("/Categories");
      return response.data;
    }
  const {isLoading, isError, data} = useQuery({
    queryKey: ["categories"],
    staleTime:5*60*1000,
    queryFn: fetchCategories
  })

  if (isLoading) return <CircularProgress/>
  if(isError) return <Typography>error</Typography>

  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: "#fff",
        border: "1px solid #e5e7eb",
        borderTop: 1,
        borderRadius: "0 0 12px 12px",
        overflow: "hidden",
      }}
    >
      <List disablePadding>
        {data.map((category) => (
          <ListItemButton
            key={category.id}
            sx={{
              py: 1.4,
              px: 2,
              "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
            }}
          >
            <ListItemText
              primary={category.name}
              slotProps={{ fontWeight: 600, color: "#111827" }}
            />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  )
}
