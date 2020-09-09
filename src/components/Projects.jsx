import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import './Projects.css';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Projects(pros) {
  const [open, setOpen] = useState(false);
  const [infoPro, setInfoPro] = useState();
  const handleClickOpen = () => {
    setOpen(true);
    setInfoPro(1);
  };


  const handleClickOpen_2 = () => {
    setOpen(true);
    setInfoPro(2);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container id={pros.id}>
      <div>
        <h2 className="title">Recent Projects <hr /> </h2>
        <div className="projects-grid">

          {/* Project 1 */}
          <Card className="entire-card" >
            <CardActionArea>
              <CardMedia
                className="projects-image"
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/s960x960/117308059_2655735998015568_5020608313336683312_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=O9JThzWjyb0AX9Urkt7&_nc_ht=scontent.fcbr1-1.fna&_nc_tp=7&oh=f1428e70a850ba5f3d845debb6b96c8c&oe=5F572FA1"
                title="project1"
                onClick={handleClickOpen}
              />
              <CardContent className="info">
                <Typography gutterBottom variant="h5" component="h2">
                  React Personal Portforio
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A personal one page website that provides brief information about myself.
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="social_link">
              <Button href="https://github.com/ryotma14/react-onepage-website" target="_blank"> <i className="fab fa-github" aria-hidden="true" /></Button>
              <Button href="https://codesandbox.io/s/crazy-poitras-4orog" target="_blank"> <i className="fab fa-codepen" aria-hidden="true" /></Button>
            </CardActions>
          </Card>


          {/* Project 2 */}
          <Card className="entire-card-2" >
            <CardActionArea>
              <CardMedia
                className="projects-image"
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/s960x960/117308059_2655735998015568_5020608313336683312_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=O9JThzWjyb0AX9Urkt7&_nc_ht=scontent.fcbr1-1.fna&_nc_tp=7&oh=f1428e70a850ba5f3d845debb6b96c8c&oe=5F572FA1"
                title="project2"
                onClick={handleClickOpen_2}
              />
              <CardContent className="info">
                <Typography gutterBottom variant="h5" component="h2">
                  React Stock Search
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A stock search application to find an ideal stock that a user would invest.
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="social_link">
              <Button href="https://github.com/ryotma14/react-onepage-website" target="_blank"> <i className="fab fa-github" aria-hidden="true" /></Button>
              <Button href="https://github.com/ryotma14/react-onepage-website" target="_blank"> <i className="fab fa-codepen" aria-hidden="true" /></Button>
            </CardActions>
          </Card>
        </div>

        <Dialog fullScreen open={open} TransitionComponent={Transition}>
          <div className="icon">

            <i class="fas fa-times fa-4x" onClick={handleClose}></i>

          </div>

          {/* Project 1 render*/}
          <List className="project-detail">

            {infoPro === 1 &&

              <List>
                <img src="https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/s960x960/117308059_2655735998015568_5020608313336683312_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=O9JThzWjyb0AX9Urkt7&_nc_ht=scontent.fcbr1-1.fna&_nc_tp=7&oh=f1428e70a850ba5f3d845debb6b96c8c&oe=5F572FA1"
                  alt="project screenshot" width="40%" height="105%" />
                <img src="https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/s960x960/117308059_2655735998015568_5020608313336683312_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=O9JThzWjyb0AX9Urkt7&_nc_ht=scontent.fcbr1-1.fna&_nc_tp=7&oh=f1428e70a850ba5f3d845debb6b96c8c&oe=5F572FA1"
                  alt="project screenshot" width="40%" height="105%" />
                <img src="https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/s960x960/117308059_2655735998015568_5020608313336683312_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=O9JThzWjyb0AX9Urkt7&_nc_ht=scontent.fcbr1-1.fna&_nc_tp=7&oh=f1428e70a850ba5f3d845debb6b96c8c&oe=5F572FA1"
                  alt="project screenshot" width="40%" height="105%" />
                <img src="https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/s960x960/117308059_2655735998015568_5020608313336683312_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=O9JThzWjyb0AX9Urkt7&_nc_ht=scontent.fcbr1-1.fna&_nc_tp=7&oh=f1428e70a850ba5f3d845debb6b96c8c&oe=5F572FA1"
                  alt="project screenshot" width="40%" height="105%" />

                <h2>Tools/libraries used in this project:</h2>

                <p>React Bootstrap</p>
                <p>MATERIAL-UI</p>
                <p>React Scroll</p>
                <p>Font Awesome</p>
                <p> <i class="far fa-times-circle fa-1x" onClick={handleClose}>Close</i> </p>
              </List>
            }

            {/* Project 2 render*/}

            {infoPro === 2 &&

              <List>

                <img src="https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/s960x960/117308059_2655735998015568_5020608313336683312_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=O9JThzWjyb0AX9Urkt7&_nc_ht=scontent.fcbr1-1.fna&_nc_tp=7&oh=f1428e70a850ba5f3d845debb6b96c8c&oe=5F572FA1"
                  width="40%" height="105%" />
                {/* <img src ="https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/s960x960/117308059_2655735998015568_5020608313336683312_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=O9JThzWjyb0AX9Urkt7&_nc_ht=scontent.fcbr1-1.fna&_nc_tp=7&oh=f1428e70a850ba5f3d845debb6b96c8c&oe=5F572FA1"  
     　　　width="40%" height="105%"/>
     <img src ="https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/s960x960/117308059_2655735998015568_5020608313336683312_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=O9JThzWjyb0AX9Urkt7&_nc_ht=scontent.fcbr1-1.fna&_nc_tp=7&oh=f1428e70a850ba5f3d845debb6b96c8c&oe=5F572FA1"  
     　　　width="40%" height="105%"/>
     <img src ="https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/s960x960/117308059_2655735998015568_5020608313336683312_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=O9JThzWjyb0AX9Urkt7&_nc_ht=scontent.fcbr1-1.fna&_nc_tp=7&oh=f1428e70a850ba5f3d845debb6b96c8c&oe=5F572FA1"  
     　　　width="40%" height="105%"/> */}

                <h2>Tools/libraries used in this project:</h2>
                <p>React Bootstrap</p>
                <p>MATERIAL-UI</p>
                <p>React Scroll</p>
                <p>Font Awesome</p>
                <p> <i class="far fa-times-circle fa-1x" onClick={handleClose}>Close</i> </p>
              </List>
            }
          </List>
        </Dialog>
      </div>
    </Container>
  );
}
