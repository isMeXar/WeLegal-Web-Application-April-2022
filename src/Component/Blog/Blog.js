import React from "react";
import {
  makeStyles,
  Typography,
  Box,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
} from "@material-ui/core";
import './blog.css';
import { Grid } from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Pagination from "@material-ui/lab/pagination";
import blogbackground from "./img/blog2.jpg";

const useStyles = makeStyles((theme) => ({
  
  blog: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.1)),url("${blogbackground}")`,
    height: "400px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "5.5rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  blogContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    textAlign: "center",
    paddingBottom: theme.spacing(4),
    
  },
  card: {
    maxWidth: "80%",
    margin: " 0 auto",
    float: "none",
    marginBottom: "10px",
   
  },
  media: {
    height: 200,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    marginRight: "2.5px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
    marginRight: "90px"
  },
 
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Blog() {
  const classes = useStyles();
  return (
    <div className="App">
      <Box>
        <Box className={classes.blog}> BLOG</Box>
      </Box>
      <Container maxwidth="lg" className={classes.blogContainer}>
        <Typography variant="h4" color="#000" className={classes.blogTitle}>
          Featured Articles
        </Typography>
        <Grid container spacing={0} justify="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require("./img/article1.jpg")}
                  alt="article1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    What to Know Before You Choose to Divorce
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.CardActions}>
                {/*<Button size="small">Share</Button>
        <Button size="small">Learn More</Button>*/}
                <Box className={classes.author}>
                  <Avatar src={require("./img/Lawyer3.jpg")} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color=" textSecondary"
                      component="p"
                    >
                      February 19, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require("./img/article2.jpg")}
                  alt="article1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Can I Force My Spouse to Attend Family Law Mediation? Will I
                    Need a Lawyer?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.CardActions}>
                {/*<Button size="small">Share</Button>
        <Button size="small">Learn More</Button>*/}
                <Box className={classes.author}>
                  <Avatar src={require("./img/Lawyer2.jpg")} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      LawyerName
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color=" textSecondary"
                      component="p"
                    >
                      February 11, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box > 
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require("./img/article3.jpg")}
                  alt="article1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    8 Tips on How to Prepare for Divorce
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.CardActions}>
                {/*<Button size="small">Share</Button>
        <Button size="small">Learn More</Button>*/}
                <Box className={classes.author}>
                  <Avatar src={require("./img/Lawyer1.jpg")} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      LawyerName
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color=" textSecondary"
                      component="p"
                    >
                      February 10, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require("./img/article5.jpg")}
                  alt="article1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    3 Month Report on 4 Day Work Weeks
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.CardActions}>
                {/*<Button size="small">Share</Button>
        <Button size="small">Learn More</Button>*/}
                <Box className={classes.author}>
                  <Avatar src={require("./img/Lawyer1.jpg")} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      LawyerName
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color=" textSecondary"
                      component="p"
                    >
                      February 8, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require("./img/article4.jpg")}
                  alt="article1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    UPDATE: Divorce and Disagreements on COVID Vaccination of
                    Children
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.CardActions}>
                {/*<Button size="small">Share</Button>
        <Button size="small">Learn More</Button>*/}
                <Box className={classes.author}>
                  <Avatar src={require("./img/Lawyer2.jpg")} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      LawyerName
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color=" textSecondary"
                      component="p"
                    >
                      February 1, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require("./img/article6.jpeg")}
                  alt="article1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    What to Know about personal injury
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.CardActions}>
                {/*<Button size="small">Share</Button>
        <Button size="small">Learn More</Button>*/}
                <Box className={classes.author}>
                  <Avatar src={require("./img/Lawyer3.jpg")} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      LawyerName
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color=" textSecondary"
                      component="p"
                    >
                      January 28, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Blog;
