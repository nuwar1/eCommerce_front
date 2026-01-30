import React, { useState, useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useForm, Controller } from "react-hook-form";
import PageHeader from "../../components/page-header/PageHeader";
import {
  Container,
  Box,
  Typography,
  TextField,
  CircularProgress,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Stack,
  Popover,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { Link } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Products() {
  const { control, register, handleSubmit, reset, getValues, watch } = useForm({
    defaultValues: {
      search: "",
      categoryId: "",
      minPrice: "",
      maxPrice: "",
      sortBy: "name",
      ascending: true,
    },
  });

  const [activeFilters, setActiveFilters] = useState({});
  const { isLoading, isError, data } = useProducts(activeFilters);
  const { data: categoriesData, isLoading: isCategoriesLoading, isError: isCategoriesError, } = useCategories();

  const categories = categoriesData?.response ?? [];

  const [anchorEl, setAnchorEl] = useState(null);

  const searchValue = watch("search");

  useEffect(() => {
    if (searchValue === "") {
      applyFilters(getValues());
    }
  }, [searchValue]);

  const open = Boolean(anchorEl);
  const openFilters = (e) => setAnchorEl(e.currentTarget);
  const closeFilters = () => setAnchorEl(null);

  const applyFilters = (values) => {
    const cleaned = {
      search: values.search?.trim() || null,
      categoryId: values.categoryId ? Number(values.categoryId) : null,
      minPrice: values.minPrice !== "" ? Number(values.minPrice) : null,
      maxPrice: values.maxPrice !== "" ? Number(values.maxPrice) : null,
      sortBy: values.sortBy || null,
      ascending: values.ascending ?? true,
    };
    setActiveFilters(cleaned);
    closeFilters();
  };

  const onReset = () => {
    reset({
      search: "",
      categoryId: "",
      minPrice: "",
      maxPrice: "",
      sortBy: "name",
      ascending: true,
    });
    setActiveFilters({});
    closeFilters();
  };

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography>error</Typography>;

  return (
    <>
      <PageHeader
        title="Products"
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Products" },
        ]}
      />

      <Container maxWidth="xl">
        <Box component="form" onSubmit={handleSubmit(applyFilters)} sx={{ pt: 3 }}>
          <Stack spacing={2}>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={1.5}
              sx={{
                alignItems: { md: "center" },
                py: 2,
                borderRadius: 2,
                bgcolor: "#fff",
              }}
            >
              <TextField
                {...register("search")}
                placeholder="Search products..."
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    pr: 1,
                  },
                }}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          type="submit"
                          sx={{
                            bgcolor: "#111827",
                            color: "#fff",
                            borderRadius: 2,
                            p: 1,
                            "&:hover": {
                              bgcolor: "#e11d48",
                              color: "#fff",
                              borderColor: "#e11d48",
                            },
                          }}
                        >
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <Button
                type="button"
                variant="outlined"
                startIcon={<TuneIcon />}
                onClick={openFilters}
                sx={{
                  fontSize: { xs: 14, md: 16 },
                  py: 1.6,
                  fontWeight: 800,
                  textTransform: "none",
                  borderRadius: 2,
                  width: { xs: "100%", sm: "auto" },
                  minWidth: { sm: 200 },
                  borderColor: "#111827",
                  color: "#111827",
                  "&:hover": {
                    bgcolor: "#e11d48",
                    color: "#fff",
                    borderColor: "#e11d48",
                  },
                }}
              >
                Filters
              </Button>
            </Stack>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={1.5}
              sx={{
                alignItems: { md: "center" },
                py: 2,
                borderRadius: 2,
                bgcolor: "#fff",
              }}
            >
              <FormControl sx={{ minWidth: 200 }} size="medium">
                <InputLabel id="sortByLabel">Sort by</InputLabel>
                <Controller
                  name="sortBy"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="sortByLabel"
                      label="Sort by"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        applyFilters(getValues());
                      }}
                    >
                      <MenuItem value="name">Name</MenuItem>
                      <MenuItem value="price">Price</MenuItem>
                      <MenuItem value="rate">Rate</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>

              <Controller
                name="ascending"
                control={control}
                render={({ field }) => (
                  <ToggleButtonGroup
                    exclusive
                    value={field.value ? "asc" : "desc"}
                    onChange={(_, val) => {
                      if (!val) return;
                      field.onChange(val === "asc");
                      applyFilters(getValues());
                    }}
                    sx={{
                      whiteSpace: "nowrap",
                      "& .MuiToggleButton-root": { px: 2.5, textTransform: "none", fontWeight: 800 },
                    }}
                  >
                    <ToggleButton value="asc">
                      {getValues("sortBy") === "name" ? "A–Z" : "Asc"}
                    </ToggleButton>
                    <ToggleButton value="desc">
                      {getValues("sortBy") === "name" ? "Z–A" : "Desc"}
                    </ToggleButton>
                  </ToggleButtonGroup>
                )}
              />
            </Stack>
          </Stack>

          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={closeFilters}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            slotProps={{
              sx: {
                p: 2,
                width: { xs: "92vw", sm: 440 },
                borderRadius: 2,
              },
            }}
          >
            <Stack spacing={1.5} sx={{p:2}}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography sx={{ fontWeight: 900, fontSize: 18 }}>Filters</Typography>
              </Box>

              <Divider />

              <FormControl fullWidth>
                <InputLabel id="categoryLabel">Category</InputLabel>
                <Controller
                  name="categoryId"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="categoryLabel"
                      label="Category"
                      {...field}
                      disabled={isCategoriesLoading || isCategoriesError}
                    >
                      <MenuItem value="">
                        <em>All categories</em>
                      </MenuItem>

                      {categories.map((cat) => (
                        <MenuItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <TextField {...register("minPrice")} label="Min price" type="number" fullWidth />
                <TextField {...register("maxPrice")} label="Max price" type="number" fullWidth />
              </Stack>

              <Box sx={{display:"flex", gap:2}}>
                <Button
                  onClick={() => applyFilters(getValues())}
                  variant="contained"
                  fullWidth
                  sx={{
                    fontSize: { xs: 14, md: 16 },
                    py: 1.6,
                    fontWeight: 800,
                    textTransform: "none",
                    borderRadius: 2,
                    borderColor: "#111827",
                    backgroundColor: "#111827",
                    color: "#fff",
                    "&:hover": {
                      bgcolor: "#e11d48",
                      color: "#fff",
                      borderColor: "#e11d48",
                    },
                  }}
                >
                  Apply filters
                </Button>
                <Button onClick={onReset} variant="text" sx={{
                  fontWeight: 800,
                  textTransform: "none",
                  color: "#000",
                  borderRadius: 2,
                  borderColor: "#111827",
                  "&:hover": {
                    color: "#e11d48",
                  },
                }}>
                  Reset
                </Button>
              </Box>

              {isCategoriesLoading && (
                <Typography sx={{ color: "text.secondary", fontSize: 13 }}>
                  Loading categories...
                </Typography>
              )}
              {isCategoriesError && (
                <Typography sx={{ color: "error.main", fontSize: 13 }}>
                  Failed to load categories.
                </Typography>
              )}
            </Stack>
          </Popover>
        </Box>

        <Box component="section" sx={{ py: 5 }}>
          <Grid container spacing={3}>
            {data.response.data.map((product) => (
              <Grid
                key={product.id}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              >
                <Link
                  to={`/product/${product.id}`}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    width: "100%",
                  }}
                >
                  <Card
                    sx={{
                      border: "1px solid #e5e7eb",
                      borderRadius: 2,
                      boxShadow: "none",
                      width: "100%",
                      transition: "transform 200ms ease, box-shadow 200ms ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "#000",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.title}
                      sx={{ objectFit: "contain", height: 200, p: 3 }}
                    />

                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.5,
                        p: 3
                      }}
                    >
                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          "&:hover": { color: "#e11d48" },
                        }}
                      >
                        {product.name}
                      </Typography>

                      <Typography component="span" sx={{ fontWeight: 400 }}>
                        ${product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
