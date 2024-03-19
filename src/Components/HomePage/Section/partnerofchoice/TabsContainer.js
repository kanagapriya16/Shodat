import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import {
  useTheme,
  Grid,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Container,
  Divider,
} from "@mui/material";
import { Proven } from "./Tabscontent/Proven";
import { Tabs2 } from "./Tabscontent/Tabs2";
import { Tabs3 } from "./Tabscontent/Tabs3";
import { Tabs4, Tabsr4 } from "./Tabscontent/Tabs4r";
import { Tabs5 } from "./Tabscontent/Tabs5";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const isVisible = value === index;

  return (
    <div
      role="tabpanel"
      hidden={!isVisible}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      className={isVisible ? "fadeEffect" : "fadeEffect hidden"}
      {...other}
    >
      {isVisible && (
        <Box sx={{ p: 3 }}>
          <Typography align="left">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Grid item xs={12} md={10} lg={8}>
      <Box sx={{ width: "100%", bgcolor: "#DBECF9" }} mt={3}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="black"
          variant="fullWidth"
          aria-label="full width tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "blue",
              height: 4,
              borderRadius: "3px",
              marginLeft: 0, // Set marginLeft to adjust the starting position of the tab indicator4
            },
          }}
          sx={{ boxShadow: "none" }}
        >
          <Tab
            label="Proven"
            {...a11yProps(0)}
            sx={{
              textTransform: "none",
              textAlign: "left",
              fontSize: "18px",
              minWidth: "unset",
            }}
          />
          <Tab
            label="Expertise"
            {...a11yProps(1)}
            sx={{
              textTransform: "none",
              textAlign: "left",
              fontSize: "18px",
              minWidth: "unset",
            }}
          />
          <Tab
            label="Customization"
            {...a11yProps(2)}
            sx={{
              textTransform: "none",
              textAlign: "left",
              fontSize: "18px",
              minWidth: "unset",
            }}
          />
          <Tab
            label="Innovation"
            {...a11yProps(3)}
            sx={{
              textTransform: "none",
              textAlign: "left",
              fontSize: "18px",
              minWidth: "unset",
            }}
          />
          <Tab
            label="Responsible Ai"
            {...a11yProps(4)}
            sx={{
              textTransform: "none",
              textAlign: "left",
              fontSize: "18px",
              minWidth: "unset",
            }}
          />
        </Tabs>
        <Divider />

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Proven />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Tabs2 />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Tabs3 />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Tabsr4 />
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <Tabs5 />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Grid>
  );
}
