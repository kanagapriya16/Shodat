import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import innovate from "../../../assets/innovation.avif"
import modern from "../../../assets/modernize.jpg"
import secure from "../../../assets/security.avif"
import manage from "../../../assets/time.jpg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Eops from '../../../Platform/Eops'
function DiscoverDifference() {
    return (
        <Box height={'80vh'}>
            <Stack direction='row'>
                <Typography variant='h3' sx={{
                    marginTop: "6%",
                    fontWeight: "bold",
                    marginLeft: "4%"
                }}> Discover </Typography>
                <Typography variant='h3' sx={{
                    marginTop: "6%", marginLeft: "2%"
                }}
                >the Shodat difference</Typography>

            </Stack>
            <Box >
                <Stack direction="row" >
                    <Card sx={{ position: 'relative', width: "22%", height: "60%", marginLeft: "4%", marginTop: "2%" }}>
                        <CardMedia
                            component="img"
                            image={innovate}
                            alt="Image description"
                            sx={{

                                height: "100%",
                                width: "100%"
                            }}
                        />
                        <Box sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            color: 'white',
                            padding: '10px',

                        }}>
                            <CardContent>
                                <Typography variant="h5" component="div" marginTop="-40%">
                                    Innovate
                                </Typography>
                                <Typography variant="h6" marginTop="3%">
                                    Cultivating innovation
                                </Typography>
                                <Typography fontSize="15px">
                                    Redefining possibilities in data analytics
                                </Typography>
                            </CardContent>
                            <ArrowForwardIcon sx={{ marginLeft: "80%" }} />
                        </Box>
                    </Card>
                    <Card sx={{ position: 'relative', width: "22%", height: "60%", marginLeft: "1%", marginTop: "2%" }}>
                        <CardMedia
                            component="img"
                            image={manage}
                            alt="Image description"
                            sx={{

                                height: "100%",
                                width: "100%"
                            }}
                        />
                        <Box sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            color: 'white',
                            padding: '10px',

                        }}>
                            <CardContent>
                                <Typography variant="h5" component="div" marginTop="-40%">
                                    Manage
                                </Typography>
                                <Typography variant="h6" marginTop="3%">
                                    Effortless data management
                                </Typography>
                                <Typography fontSize="15px">
                                    Unleashing control and insight in every byte
                                </Typography>
                            </CardContent>
                            <ArrowForwardIcon sx={{ marginLeft: "80%" }} />
                        </Box>
                    </Card>
                    <Card sx={{ position: 'relative', width: "22%", height: "60%", marginLeft: "1%", marginTop: "2%" }}>
                        <CardMedia
                            component="img"
                            image={modern}
                            alt="Image description"
                            sx={{

                                height: "100%",
                                width: "100%"
                            }}
                        />
                        <Box sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            color: 'white',
                            padding: '10px',

                        }}>
                            <CardContent>
                                <Typography variant="h5" component="div" marginTop="-40%">
                                    Modernize
                                </Typography>
                                <Typography variant="h6" marginTop="3%">
                                    Modernizing data and applications
                                </Typography>
                                <Typography fontSize="15px">
                                    Transforming your business for the digital era
                                </Typography>
                            </CardContent>
                            <ArrowForwardIcon sx={{ marginLeft: "80%" }} />
                        </Box>
                    </Card>
                    <Card sx={{ position: 'relative', width: "22%", height: "60%", marginLeft: "1%", marginTop: "2%" }}>
                        <CardMedia
                            component="img"
                            image={secure}
                            alt="Image description"
                            sx={{

                                height: "100%",
                                width: "100%"
                            }}
                        />
                        <Box sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            color: 'white',
                            padding: '10px',

                        }}>
                            <CardContent>
                                <Typography variant="h5" component="div" marginTop="-40%">
                                    Secure
                                </Typography>
                                <Typography variant="h6" marginTop="3%">
                                    Securing your data
                                </Typography>
                                <Typography fontSize="15px">
                                    Ensuring compliance  with Cybersecurity solutions
                                </Typography>
                            </CardContent>
                            <ArrowForwardIcon sx={{ marginLeft: "80%" }} />
                        </Box>
                    </Card>
                </Stack>
            </Box>
            <Eops/>
        </Box>
    )
}

export default DiscoverDifference