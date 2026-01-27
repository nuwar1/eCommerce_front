import { createTheme } from "@mui/material/styles";

const getTheme = (mode) => {
    return createTheme({
        palette: {
            mode: mode
        },
        typography: {
            fontFamily: "'Albert Sans', sans-serif",
            fontSize: 16
        },
    })
}
export default getTheme;

