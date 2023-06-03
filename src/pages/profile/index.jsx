import { useCallback, useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import Topbar from "../../components/global/Topbar";
import Sidebar from "../../components/global/Sidebar";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import UserImage from "../../assets/user.png";

const states = [
  {
    value: "duque-de-caxias",
    label: "Duque de Caxias",
  },
  {
    value: "parque-a-equitativa",
    label: "Parque A Equitativa",
  },
  {
    value: "xerem",
    label: "Xerém",
  },
  {
    value: "santa-cruz-da-serra",
    label: "Santa Cruz da Serra",
  },
];

const Account = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [values, setValues] = useState({
    firstName: "Edson Henrique",
    lastName: "Figueiredo",
    email: "edsonhrf@gmail.com",
    phone: 21994715075,
    state: "duque-de-caxias",
    country: "Brazil",
  });

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <div className="app">
      {<Sidebar />}
      <main className="content">
        {<Topbar />}
        <Box>
          {/* HEADER */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            m="20px"
          >
            <Header title="PROFILE" subtitle="Welcome to your profile" />

            <Box>
              <Button
                sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.grey[100],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                }}
              >
                <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                Download Student Card
              </Button>
            </Box>
          </Box>
          
          <Box className = "cardsWrapper" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
            <div style={{ width: '100%', padding: "20px"}}>
              <Stack>
                <div>
                  <Typography
                    sx={{
                      color: colors.grey[100],
                      fontSize: "25px",
                      fontWeight: "bold",
                      paddingBottom: "20px",
                    }}
                  >
                    My Account
                  </Typography>
                </div>
                <div
                  className="cardsContent" style={{ flexGrow: 1 }}
                >
                  <Grid container spacing={0}>
                    <Grid className="accountProfile" item xs={12} md={4} lg={4} sx={{ paddingRight: "10px"}}>
                      <Card sx={{ backgroundColor: colors.primary[400] }}>
                        <CardContent>
                          <Box
                            sx={{
                              alignItems: "center",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <Box mb="25px">
                              <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                              >
                                <img
                                  alt="profile-user"
                                  width="100px"
                                  height="100px"
                                  src={UserImage}
                                  style={{
                                    cursor: "pointer",
                                    borderRadius: "50%",
                                  }}
                                />
                              </Box>
                              <Box textAlign="center">
                                <Typography
                                  variant="h2"
                                  color={colors.grey[100]}
                                  fontWeight="bold"
                                  sx={{ m: "10px 0 0 0" }}
                                >
                                  Edson Henrique
                                </Typography>
                                <Typography
                                  variant="h5"
                                  color={colors.greenAccent[500]}
                                  sx={{
                                    fontSize: "20px",
                                    marginTop: "10px",
                                  }}
                                >
                                  Web Developer
                                </Typography>
                                <Typography
                                  color="text.secondary"
                                  variant="body2"
                                  sx={{
                                    fontSize: "15px",
                                    marginTop: "5px",
                                  }}
                                >
                                  Rio de Janeiro BRAZIL
                                </Typography>
                                <Typography
                                  color="text.secondary"
                                  variant="body2"
                                  sx={{
                                    fontSize: "15px",
                                    marginTop: "5px",
                                  }}
                                >
                                  GMT-3
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </CardContent>
                        <Divider />
                        <CardActions sx={{ justifyContent: "center" }}>
                          <Button
                            sx={{
                              backgroundColor: colors.blueAccent[700],
                              color: colors.grey[100],
                              fontSize: "14px",
                              fontWeight: "bold",
                              padding: "10px 20px",
                            }}
                          >
                            Upload picture
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                    <Grid className="accountProfileDetails" item xs={12} md={8} lg={8} sx={{ paddingLeft: "10px" }}>
                      <form
                        autoComplete="off"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <Card sx={{ backgroundColor: colors.primary[400] }}>
                          <CardHeader
                            titleTypographyProps={{
                              variant: "h5",
                              fontSize: "25px",
                            }}
                            subheaderTypographyProps={{
                              variant: "body2",
                              fontSize: "15px",
                            }}
                            subheader="The information can be edited"
                            title="Profile"
                          />
                          <CardContent sx={{ pt: 0, marginTop: "30px" }}>
                            <Box>
                              <Grid container spacing={3}>
                                <Grid
                                  xs={12}
                                  md={6}
                                  sx={{ pl: "25px" }}
                                >
                                  <TextField
                                    fullWidth
                                    label="First name"
                                    name="firstName"
                                    onChange={handleChange}
                                    required
                                    value={values.firstName}
                                    variant="filled"
                                    sx={{ gridColumn: "span 2" }}
                                    type="text"
                                  />
                                </Grid>
                                <Grid xs={12} md={6} sx={{ pl: "15px",mb: "25px" }}>
                                  <TextField
                                    fullWidth
                                    label="Last name"
                                    name="lastName"
                                    onChange={handleChange}
                                    required
                                    value={values.lastName}
                                    variant="filled"
                                    sx={{ gridColumn: "span 2" }}
                                    type="text"
                                  />
                                </Grid>
                                <Grid
                                  xs={12}
                                  md={6}
                                  sx={{ pl: "25px" }}
                                >
                                  <TextField
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    onChange={handleChange}
                                    required
                                    value={values.email}
                                    variant="filled"
                                    sx={{ gridColumn: "span 2" }}
                                    type="email"
                                  />
                                </Grid>
                                <Grid xs={12} md={6} sx={{ pl: "15px", mb: "25px" }}>
                                  <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phone"
                                    onChange={handleChange}
                                    type="number"
                                    value={values.phone}
                                    variant="filled"
                                    sx={{ gridColumn: "span 2" }}
                                  />
                                </Grid>
                                <Grid
                                  xs={12}
                                  md={6}
                                  sx={{ pl: "25px" }}
                                >
                                  <TextField
                                    fullWidth
                                    label="Country"
                                    name="country"
                                    onChange={handleChange}
                                    required
                                    value={values.country}
                                    variant="filled"
                                    sx={{ gridColumn: "span 2" }}
                                  />
                                </Grid>
                                <Grid xs={12} md={6} sx={{ pl: "15px", mb: "15px" }}>
                                  <TextField
                                    fullWidth
                                    label="Select State"
                                    name="state"
                                    onChange={handleChange}
                                    required
                                    select
                                    SelectProps={{ native: true }}
                                    value={values.state}
                                    variant="filled"
                                    sx={{ gridColumn: "span 2" }}
                                  >
                                    {states.map((option) => (
                                      <option
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </option>
                                    ))}
                                  </TextField>
                                </Grid>
                              </Grid>
                            </Box>
                          </CardContent>
                          <Divider />
                          <CardActions sx={{ justifyContent: "flex-end" }}>
                            <Button
                              sx={{
                                backgroundColor: colors.blueAccent[700],
                                color: colors.grey[100],
                                fontSize: "14px",
                                fontWeight: "bold",
                                padding: "10px 20px",
                              }}
                            >
                              Save details
                            </Button>
                          </CardActions>
                        </Card>
                      </form>
                    </Grid>
                  </Grid>
                </div>
              </Stack>
            </div>
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default Account;
