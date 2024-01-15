import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import IconMenu from "@mui/icons-material/Menu";
import { productName } from "@/lib/modules/config";

export function Topbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <IconMenu />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {productName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
