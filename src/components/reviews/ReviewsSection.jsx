import React from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Rating,
  Stack,
  Divider,
  Alert,
  CircularProgress,
} from "@mui/material";
import useAddReview from "../../hooks/useAddReview";

export default function ReviewsSection({ productId }) {
  const [rating, setRating] = React.useState(0);
  const [comment, setComment] = React.useState("");

  const { mutate: addReview, isPending, isError, isSuccess } = useAddReview(productId);


  const handleSubmit = (e) => {
    e.preventDefault();

    addReview(
      { Rating: rating, Comment: comment.trim() },
      {
        onSuccess: () => {
          setComment("");
          setRating(0);
        },
      }
    );
  };

  return (
    <Paper variant="outlined" sx={{ borderRadius: 3, p: { xs: 2, md: 3 } }}>
      <Typography variant="h6" sx={{ fontWeight: 900 }}>
        Reviews
      </Typography>
      <Typography sx={{ color: "text.secondary", mt: 0.5 }}>
        Share your experience with this product.
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Box component="form" onSubmit={handleSubmit}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems={{ xs: "stretch", md: "center" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontWeight: 800 }}>Rating:</Typography>
            <Rating
              value={rating}
              onChange={(_, v) => setRating(v)}
              size="medium"
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <TextField
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your review..."
              multiline
              minRows={3}
              fullWidth
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            disabled={isPending}
            sx={{
              alignSelf: { xs: "stretch", md: "flex-start" },
              height: { xs: 44, md: 56 },
              px: 3,
              fontWeight: 900,
              textTransform: "none",
              borderRadius: 2,
              bgcolor: "#000",
              "&:hover": {
                color: "#fff",
                bgcolor: "#e11d48",
                borderColor: "#e11d48",
              },
            }}
          >
          {isPending ? <CircularProgress size={22} /> : "Submit"}
        </Button>
      </Stack>


      <Box sx={{ mt: 2 }}>
        {isError ? (
          <Alert severity="error">
            Failed to add review
          </Alert>
        ) : null}

        {isSuccess ? (
          <Alert severity="success">Review added successfully!</Alert>
        ) : null}
      </Box>
    </Box>
    </Paper >
  );
}
