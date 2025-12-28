import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function PageHeader({ title, crumbs }) {
  return (
    <Box
      sx={{
        py: 10,
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
          fontWeight: 400,
          mb: 1.5,
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
                "&:hover":{
                    color: "#e11d48",
                    textDecoration:"none"
                }
              }}
            >
              {crumb.label}
            </Link>
          ) : (
            <Typography key={index} color="text.primary">
              {crumb.label}
            </Typography>
          )
        )}
      </Breadcrumbs>
    </Box>
  );
}
