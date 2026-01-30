import { Paper, List, ListItemButton, ListItemText, Box, Typography, CircularProgress, Card, CardActionArea, Grid } from "@mui/material";
import { useCategories } from "../../hooks/useCategories";
import { Link } from "react-router-dom";

export default function Categories() {
  const { isLoading, isError, data } = useCategories();
  if (isLoading) return <CircularProgress />
  if (isError) return <Typography>error</Typography>

  const categories = data.response;

  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" }, mb: 2 }}>
        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid key={category.id} size={{ xs: 6, sm: 4 }}>
              <Card
                variant="outlined"
                sx={{
                  borderRadius: 2,
                  borderColor: "#e5e7eb",
                  height: "100%",
                  "&:hover": { borderColor: "#000" },
                }}
              >
                <CardActionArea
                  component={Link}
                  to={`/category/${category.id}`}
                  sx={{
                    p: 2,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{
                    fontWeight: 800, fontSize: 14, "&:hover": {
                      color: "#e11d48",
                    }
                  }}>
                    {category.name}
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>


      <Paper
        elevation={0}
        sx={{
          display: { xs: "none", md: "block" },
          border: "1px solid #e5e7eb",
          borderRadius: "0 0 12px 12px",
          overflow: "hidden",
        }}
      >
        <List disablePadding sx={{ m: 0, p: 0 }}>
          {categories.map((category) => (
            <ListItemButton
              key={category.id}
              component={Link}
              to={`/category/${category.id}`}
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
    </>
  );
}