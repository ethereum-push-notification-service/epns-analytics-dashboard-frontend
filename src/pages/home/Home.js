import Layout from 'components/layout'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const Home = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 160,
              }}
            >
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Number of Subscription
              </Typography>

              <Typography component="p" variant="h4">
                1234
              </Typography>
              <Typography color="text.secondary" sx={{ flex: 1 }}>
                in 24 hours
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Home
