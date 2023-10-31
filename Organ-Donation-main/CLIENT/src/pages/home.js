import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Home = () => (
  <div>
    <Segment style={{ padding: '6em 0em', backgroundColor: '#add8e6' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={7}>
            <Header as='h1' style={{ fontSize: '2em' }}>
              Secure Organ Donation
              </Header>
            <Header></Header>
            <p style={{ fontSize: '1.33em' }}>
              Ethereum Blockchain Technology to automate organ donation process. Security is added to the records of donors and recipients
              and eliminates the need of third party requirements.
              </p>
          </Grid.Column>
          <Grid.Column floated='right' width={7}>
            <Image bordered rounded massive src='/images/home_image.jpeg' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button as={Link} size='huge' primary to="/donor-signup">Donate Now</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Decentralization
          </Header> 
        <p style={{ fontSize: '1.33em' }}>
          Blockchain is being widely used in the healthcare
          industry as it can maintain secure, transparent and robust data. Our objective is to automate
          the whole organ donation process leveraging the power of Ethereum Blockchain which is a
          decentralized open source blockchain featuring smart contract functionality.
          </p>

        <Divider horizontal>
          <Header as='h4'>
            <Icon name='tag' />
          </Header>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
           Process
          </Header>
        <p style={{ fontSize: '1.33em' }}>
          Any donor can register his details on our decentralized web application. Hospital can login, verify
          and approve the donor details on the   DApp and also register new recipients. Electronic
          medical record of both the donors and recipients are hashed using IPFS. Matched
          records are stored on the blockchain and this is done on a first-come-first basis
          </p>
      </Container>
    </Segment>


    <Segment style={{ padding: '8em 0em' }} horizontal>
    <Container >
      <Header as='h1' style={{ fontSize: '4em', textAlign:'center' }}>
        Tech stack
        </Header>
    <Image.Group size='medium'>
      <Image src={'/images/react.png'} />
      <Image src={'/images/mongo.png'} />
      <Image src={'/images/node.png'} />
      <Image src={'/images/meta.png'} />
      <Image src={'/images/eth.jpeg'} />
      <Image src={'/images/web.png'} />   
    </Image.Group>
    </Container>
    </Segment>



    <Segment style={{ padding: '0em', backgroundColor: '#add8e6' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>

          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Project Guide
              </Header>
            <p style={{ fontSize: '1.33em' }}>Dr. Rajeshwari B S</p>
            <p style={{ fontSize: '1.33em' }}>Assistant Professor</p>
            <p style={{ fontSize: '1.33em' }}>BMS College of Engineering</p>
          </Grid.Column>

          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Project Team
              </Header>
            <p style={{ fontSize: '1.33em' }}>Jayanth Av</p>
            <p style={{ fontSize: '1.33em' }}>Harshavardhan K</p>
            <p style={{ fontSize: '1.33em' }}>Akhil Metta </p>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </Segment>

    

  </div>

)

export default Home;