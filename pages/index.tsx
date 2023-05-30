import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container, Navbar, Text, Button, Grid, Col} from '@nextui-org/react'

const Home: NextPage = () => {
  return (
    <Container>
      {/* {Navbar} */}
      <Navbar isCompact variant={"static"}>
        {/* {左} */}
        <Navbar.Brand>
          <Text b color='inherit'>
            LearnToCode
          </Text>
        </Navbar.Brand>

        {/* {中央} */}
        <Navbar.Content hideIn="md">
          <Navbar.Link href = "#">Learning Platform</Navbar.Link>
          <Navbar.Link href = "#">Community</Navbar.Link>
          <Navbar.Link href = "#">Contact Us</Navbar.Link>
        </Navbar.Content>

        {/* {右} */}
        <Navbar.Content hideIn="md">
          <Navbar.Link href = "#">Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      {/* {Jumbotron} */}
      <Grid.Container justify='center' css={{"height": "500px", "backgroundImage": "url(https://littlevisuals.co/images/sunset.jpg)"}}>
        <Grid xs={12} sm={6} alignItems='center'>
          <Col css={{"width" : "100%"}}>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>The Education Platform</Text>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>of the Future</Text>
            <Button size="md" shadow color="gradient" css={{"width": "100%", "marginTop": "10px"}}>Join For Freeq</Button>
          </Col>
        </Grid>
      </Grid.Container>

      {/* {Displaying Product Cards} */}
      <Grid.Container gap={2}>
        <Grid>

        </Grid>
      </Grid.Container>
    </Container>

  )
}
export default Home