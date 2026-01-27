import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  TextField,
  InputAdornment,
  Divider,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {

  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        pt: { xs: 5, md: 7 },
        pb: { xs: 4, md: 5 },
        background:
          "radial-gradient(1200px 500px at 20% 0%, rgba(255,255,255,0.08), transparent 60%), linear-gradient(180deg, #0b1220, #070b12)",
        color: "#fff",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={3}>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: 26,
                mb: 2,
              }}
            >
              KASHOP
            </Typography>

            <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: 13, mb: 2 }}>
              56II Wellington Road, Suite 115, Gainesville
            </Typography>

            <Typography sx={{ fontWeight: 900, fontSize: 22, mb: 1 }}>
              (84) 943 446 000
            </Typography>

            <Link href="#" sx={{ color: "rgba(255, 255, 255, 0.65)", fontSize: 14, mb: 2, textDecoration: "none" }}>
              entry@support.com
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography sx={{
              fontWeight: 800,
              color: "#fff",
              mb: 1.5,
              fontSize: 16
            }}
            >Information</Typography>
            <Stack spacing={1.2}>
              <Link sx={{
                color: "rgba(255, 255, 255, 0.65)", fontSize: 14, mb: 2, textDecoration: "none", 
                transition: "transform 180ms ease", "&:hover": { cursor: "pointer", transform: "translateX(4px)" }
              }}>
                Privacy Policy
              </Link>
              <Link sx={{ color: "rgba(255,255,255,0.65)", fontSize: 14, mb: 2, textDecoration: "none", 
                transition: "transform 180ms ease", "&:hover": { cursor: "pointer", transform: "translateX(4px)"}
              }}>
                Delivery time
              </Link>
              <Link sx={{ color: "rgba(255,255,255,0.65)", fontSize: 14, mb: 2, textDecoration: "none",
                transition: "transform 180ms ease", "&:hover": { cursor: "pointer", transform: "translateX(4px)"}
               }}>
                Our blog
              </Link>
              <Link sx={{ color: "rgba(255,255,255,0.65)", fontSize: 14, mb: 2, textDecoration: "none", 
                transition: "transform 180ms ease", "&:hover": { cursor: "pointer", transform: "translateX(4px)"}
              }}>
                Delivery Return
              </Link>
              <Link sx={{ color: "rgba(255,255,255,0.65)", fontSize: 14, mb: 2, textDecoration: "none", 
                transition: "transform 180ms ease", "&:hover": { cursor: "pointer", transform: "translateX(4px)"} }}>
                Terms and Conditions
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography sx={{
              fontWeight: 800,
              color: "#fff",
              mb: 1.5,
              fontSize: 16
            }}>Customer Services</Typography>
            <Stack spacing={1.2}>
              <Link sx={{ color: "rgba(255, 255, 255, 0.65)", fontSize: 14, mb: 2, textDecoration: "none",
                transition: "transform 180ms ease", "&:hover": { cursor: "pointer", transform: "translateX(4px)"}
               }}>
                About Us
              </Link>
              <Link sx={{ color: "rgba(255,255,255,0.65)", fontSize: 14, mb: 2, textDecoration: "none",
                transition: "transform 180ms ease", "&:hover": { cursor: "pointer", transform: "translateX(4px)"}
               }}>
                Faqs
              </Link>
              <Link sx={{ color: "rgba(255,255,255,0.65)", fontSize: 14, mb: 2, textDecoration: "none",
                transition: "transform 180ms ease", "&:hover": { cursor: "pointer", transform: "translateX(4px)"}
               }}>
                Lookbook
              </Link>
              <Link sx={{ color: "rgba(255,255,255,0.65)", fontSize: 14, mb: 2, textDecoration: "none",
                transition: "transform 180ms ease", "&:hover": { cursor: "pointer", transform: "translateX(4px)"}
               }}>
                Gallery
              </Link>
              <Link sx={{ color: "rgba(255,255,255,0.65)", fontSize: 14, mb: 2, textDecoration: "none",
                transition: "transform 180ms ease", "&:hover": { cursor: "pointer", transform: "translateX(4px)"}
               }}>
                Track Order
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography sx={{
              fontWeight: 800,
              color: "#fff",
              mb: 1.5,
              fontSize: 16
            }}>Contact Us</Typography>
            <Stack spacing={1.2}>
              <Link sx={{ color: "rgba(255, 255, 255, 0.65)", fontSize: 14, mb: 2, textDecoration: "none",
                transition: "transform 180ms ease", "&:hover": { cursor: "pointer", transform: "translateX(4px)"}
               }}>
                Contact us
              </Link>
              <Link sx={{ color: "rgba(255,255,255,0.65)", fontSize: 14, mb: 2, textDecoration: "none",
                transition: "transform 180ms ease", "&:hover": { cursor: "pointer", transform: "translateX(4px)"}
               }}>
                Faqs
              </Link>
              <Link sx={{ color: "rgba(255,255,255,0.65)", fontSize: 14, mb: 2, textDecoration: "none",
                transition: "transform 180ms ease", "&:hover": { cursor: "pointer", transform: "translateX(4px)"}
               }}>
                Store Location
              </Link>
              <Link sx={{ color: "rgba(255,255,255,0.65)", fontSize: 14, mb: 2, textDecoration: "none",
                transition: "transform 180ms ease", "&:hover": { cursor: "pointer", transform: "translateX(4px)"}
               }}>
                Support 24/7
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{ fontWeight: 900, fontSize: 18, mb: 2 }}>
              Join Our Newsletter And Get $50 <br />
              Discount For Your First Order
            </Typography>

            <TextField
              fullWidth
              placeholder="Sign Up Newsletter"
              variant="outlined"
              SlotProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="subscribe" sx={{ color: "#fff" }}>
                      <ArrowForwardIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "999px",
                  color: "#fff",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  "& fieldset": { borderColor: "rgba(255,255,255,0.16)" },
                  "&:hover fieldset": { borderColor: "rgba(255,255,255,0.30)" },
                  "&.Mui-focused fieldset": { borderColor: "rgba(255,255,255,0.45)" },
                },
                "& input::placeholder": { color: "rgba(255,255,255,0.6)" },
              }}
            />

            <Stack direction="row" spacing={1.2} sx={{ mt: 2.5 }}>
              <IconButton sx={{
                width: 44,
                height: 44,
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#fff",
                "&:hover": {
                  borderColor: "rgba(255,255,255,0.35)",
                  backgroundColor: "rgba(255,255,255,0.06)",
                }
              }
              } aria-label="facebook">
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton sx={{
                width: 44,
                height: 44,
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#fff",
                "&:hover": {
                  borderColor: "rgba(255,255,255,0.35)",
                  backgroundColor: "rgba(255,255,255,0.06)",
                }
              }
              } aria-label="instagram">
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton sx={{
                width: 44,
                height: 44,
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#fff",
                "&:hover": {
                  borderColor: "rgba(255,255,255,0.35)",
                  backgroundColor: "rgba(255,255,255,0.06)",
                }
              }
              } aria-label="x">
                <XIcon fontSize="small" />
              </IconButton>
              <IconButton sx={{
                width: 44,
                height: 44,
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#fff",
                "&:hover": {
                  borderColor: "rgba(255,255,255,0.35)",
                  backgroundColor: "rgba(255,255,255,0.06)",
                }
              }
              } aria-label="tiktok">
                <MusicNoteIcon fontSize="small" />
              </IconButton>
              <IconButton sx={{
                width: 44,
                height: 44,
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#fff",
                "&:hover": {
                  borderColor: "rgba(255,255,255,0.35)",
                  backgroundColor: "rgba(255,255,255,0.06)",
                }
              }
              } aria-label="youtube">
                <YouTubeIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.10)" }} />

        <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>
          © {new Date().getFullYear()} KASHOP. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
