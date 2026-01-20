import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function PageHeader({ title, crumbs }) {
  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 10 },     
        px: { xs: 2, sm: 3, md: 0 },    
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        bgcolor: "#f7f7f7",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 600,
          mb: 1.5,
          fontSize: { xs: 28, sm: 36, md: 48 },         
        }}
      >
        {title}
      </Typography>

      <Breadcrumbs
        separator="›"
      >
        {crumbs.map((crumb, index) =>
          crumb.to ? (
            <Link
              key={index}
              component={RouterLink}
              to={crumb.to}
              underline="none"
              sx={{
                color: "#000",
                fontSize: { xs: 14, sm: 15, md: 16 },
                "&:hover":{
                    color: "#e11d48",
                    textDecoration:"none"
                }
              }}
            >
              {crumb.label}
            </Link>
          ) : (
            <Typography key={index} color="text.primary"
            sx={{
                fontSize: { xs: 14, sm: 15, md: 16 },
              }}>
              {crumb.label}
            </Typography>
          )
        )}
      </Breadcrumbs>
    </Box>
  );
}
