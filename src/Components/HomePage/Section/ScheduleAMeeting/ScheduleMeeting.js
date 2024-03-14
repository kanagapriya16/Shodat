import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import AiButton from "../../../Button/AiButton";

const CenteredContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "50px",
  padding: "50px 30px",
});

const ScheduleMeeting = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
    // Perform form submission logic here
  };
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <Box sx={{ backgroundColor: "#340d73" }}>
      <CenteredContainer>
        <Grid container spacing={3}>
          {/* Right Side - Title, Paragraph, and Button */}
          <Grid item xs={12} sm={12} md={6}>
            <Box style={{ padding: "20px", textAlign: "left" }}>
              <Typography
                variant="h3"
                gutterBottom
                fontWeight="bolt"
                color="white"
              >
                Unlock the untapped potential of your business with the
                transformative capabilities of AI
              </Typography>
              <Typography variant="h6" gutterBottom color="white">
                From automating repetitive tasks to optimizing decision-making
                through advanced analytics, artficial intelligence is the key to
                scalability and Innovation.
              </Typography>
              <AiButton
                onClick={handleClick}
                showArrow={true}
                background="#f3d157"
                color="black"
                width="30%"
              >
                <b>Let's Talk AI</b>
              </AiButton>
            </Box>
          </Grid>

          {/* Left Side - Form */}
          <Grid item xs={12} sm={6}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "white",
                margin: "0px 80px",
                padding: "50px 0",
                borderRadius: "40px",
              }}
            >
              <form onSubmit={handleSubmit}>
                {" "}
                <Box sx={{ margin: "10px 40px" }}>
                  <Typography variant="h4" gutterBottom fontWeight="bold">
                    Schedule a Meeting
                  </Typography>

                  <TextField
                    fullWidth
                    margin="normal"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="standard"
                  />

                  <TextField
                    fullWidth
                    margin="normal"
                    label="Mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    variant="standard"
                  />

                  <TextField
                    fullWidth
                    margin="normal"
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="standard"
                  />

                  <TextField
                    fullWidth
                    margin="normal"
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    variant="standard"
                  />

                  <TextField
                    fullWidth
                    margin="normal"
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    variant="standard"
                  />

                  <AiButton
                    type="submit"
                    onClick={handleClick}
                    background="black"
                    color="white"
                    width="100%"
                  >
                    <b>Submit</b>
                  </AiButton>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </CenteredContainer>
    </Box>
  );
};

export default ScheduleMeeting;
