import React from "react";

import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="primary"
        padding="10px"
        textAlign="center"
        mt={10}
      >
        ساخته شده با ❤️ توسط قلمی
      </Typography>
    </footer>
  );
}

export default Footer;
