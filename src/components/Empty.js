import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";




function Empty() {
  const copyCliboard1 = "https://youtu.be/TwQ5jUQwyks";
  const copyCliboard2 = "https://youtu.be/rO-V04slXak";

  return (
    <div style={{ overflowY: "hidden" }}>
      <Typography variant="body1"> All Todos Completed ! </Typography>

      <Paper
        style={{
          marginTop: "20px",
          backgroundColor: "whitesmoke",
          overflowY: "hidden",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={5} lg={6}>
            <Card>
              <CardMedia
                component="iframe"
                height="210px"
                title="test"
                src="https://www.youtube.com/embed/TwQ5jUQwyks"
              />
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    navigator.clipboard.writeText(copyCliboard1);
                    alert("Copied To Clipboard");
                  }}
                >
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={5} lg={6}>
            <Card sx={{ maxWidth: 20 }}>
              <CardMedia
                component="iframe"
                height="210px"
                title="test"
                src="https://www.youtube.com/embed/rO-V04slXak"
              />
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    navigator.clipboard.writeText(copyCliboard2);
                    alert("Copied to clipboard")
                  }}
                >
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Empty;
