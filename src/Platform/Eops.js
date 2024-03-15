import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import SmarterEdge from './SmarterEdge';
function Eops() {
    return (
        <Box height={'150vh'} sx={{
            backgroundColor: "#FFFBEF",
            marginTop: "2%"
        }}>
            <Grid container xs={12}>
                <Typography variant='h4' sx={{
                    marginLeft: "4%",
                    marginTop: "4%"
                }}>Why eOps?</Typography>

                <Typography sx={{
                    marginLeft: "13%",
                    marginTop: "4%",

                }}
                > Turnkey enterprise platform for all data integration &
                    <Typography sx={{
                        marginLeft: "1%",
                        marginTop: "1%"
                    }}
                    >analytics needs.</Typography></Typography>
                <Typography sx={{
                    marginLeft: "8%",
                    marginTop: "4%",

                }}
                > Industry-proven ML models.
                </Typography>
                <Typography sx={{
                    marginLeft: "29%",
                    marginTop: "4%",

                }}
                > No implementation delays with minimal
                    <Typography sx={{
                        marginLeft: "1%",
                        marginTop: "1%"
                    }}
                    >customizations.</Typography></Typography>

                <Typography sx={{
                    marginLeft: "14%",
                    marginTop: "4%",

                }}
                > Consistent CSAT ratings of 95% and above.
            </Typography>
            <Typography sx={{
                    marginLeft: "29%",
                    marginTop: "4%",

                }}
                > Seamless deployments & built for global scale.
            </Typography>
            <Typography sx={{
                    marginLeft: "10%",
                    marginTop: "4%",

                }}
                >Low/No code data ingestion, harmonization & ML 
                    <Typography sx={{
                        marginLeft: "1%",
                        marginTop: "1%"
                    }}
             >features.</Typography></Typography>
            </Grid>
            <SmarterEdge/>
        </Box>

    )
}

export default Eops