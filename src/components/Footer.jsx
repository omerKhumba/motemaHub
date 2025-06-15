import { Box, Typography, Grid, Link, List, ListItem, IconButton } from '@mui/joy';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 8,
        px: 2,
        backgroundColor: 'primary.900',
        color: 'common.white',
        borderTop: '1px solid',
        borderColor: 'primary.700',
        background: 'linear-gradient(135deg, #1b2a41 0%, #3d6285 100%)'
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: '1300px',
          mx: 'auto',
          px: 2
        }}
      >
        {/* Colonne Logo & Description */}
        <Grid xs={12} md={4}>
          <Typography
            level="h3"
            sx={{
              mb: 2,
              fontSize: '1.8rem',
              fontWeight: 'xl',
              color: 'primary.100'
            }}
          >
            Motema<span style={{ color: '#d7a032' }}>Hub</span>
          </Typography>
          <Typography sx={{ mb: 2, color: 'primary.200' }}>
            La plateforme qui connecte les talents du numérique avec des opportunités concrètes.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            <IconButton
              variant="outlined"
              sx={{
                color: 'primary.100',
                borderColor: 'primary.500',
                '&:hover': {
                  backgroundColor: 'primary.700',
                  color: 'common.white'
                }
              }}
            >
              <FaFacebook />
            </IconButton>
            <IconButton
              variant="outlined"
              sx={{
                color: 'primary.100',
                borderColor: 'primary.500',
                '&:hover': {
                  backgroundColor: 'primary.700',
                  color: 'common.white'
                }
              }}
            >
              <FaTwitter />
            </IconButton>
            <IconButton
              variant="outlined"
              sx={{
                color: 'primary.100',
                borderColor: 'primary.500',
                '&:hover': {
                  backgroundColor: 'primary.700',
                  color: 'common.white'
                }
              }}
            >
              <FaLinkedin />
            </IconButton>
            <IconButton
              variant="outlined"
              sx={{
                color: 'primary.100',
                borderColor: 'primary.500',
                '&:hover': {
                  backgroundColor: 'primary.700',
                  color: 'common.white'
                }
              }}
            >
              <FaGithub />
            </IconButton>
          </Box>
        </Grid>

        {/* Colonne Liens rapides */}
        <Grid xs={6} md={2}>
          <Typography level="title-lg" sx={{ mb: 2, color: 'primary.50', fontWeight: 'lg' }}>
            Navigation
          </Typography>
          <List sx={{ p: 0 }}>
            <ListItem sx={{ p: 0, mb: 1 }}>
              <Link
                href="#"
                sx={{
                  color: 'primary.200',
                  '&:hover': { color: 'primary.50', textDecoration: 'none' }
                }}
              >
                Accueil
              </Link>
            </ListItem>
            <ListItem sx={{ p: 0, mb: 1 }}>
              <Link
                href="#"
                sx={{
                  color: 'primary.200',
                  '&:hover': { color: 'primary.50', textDecoration: 'none' }
                }}
              >
                Trouver un Prestataire
              </Link>
            </ListItem>
            <ListItem sx={{ p: 0, mb: 1 }}>
              <Link
                href="#"
                sx={{
                  color: 'primary.200',
                  '&:hover': { color: 'primary.50', textDecoration: 'none' }
                }}
              >
                Talents
              </Link>
            </ListItem>
            <ListItem sx={{ p: 0, mb: 1 }}>
              <Link
                href="#"
                sx={{
                  color: 'primary.200',
                  '&:hover': { color: 'primary.50', textDecoration: 'none' }
                }}
              >
                Formations
              </Link>
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <Link
                href="#"
                sx={{
                  color: 'primary.200',
                  '&:hover': { color: 'primary.50', textDecoration: 'none' }
                }}
              >
                Contact
              </Link>
            </ListItem>
          </List>
        </Grid>

        {/* Colonne Ressources */}
        <Grid xs={6} md={2}>
          <Typography level="title-lg" sx={{ mb: 2, color: 'primary.50', fontWeight: 'lg' }}>
            Ressources
          </Typography>
          <List sx={{ p: 0 }}>
            <ListItem sx={{ p: 0, mb: 1 }}>
              <Link
                href="#"
                sx={{
                  color: 'primary.200',
                  '&:hover': { color: 'primary.50', textDecoration: 'none' }
                }}
              >
                Blog
              </Link>
            </ListItem>
            <ListItem sx={{ p: 0, mb: 1 }}>
              <Link
                href="#"
                sx={{
                  color: 'primary.200',
                  '&:hover': { color: 'primary.50', textDecoration: 'none' }
                }}
              >
                Nos Solutions
              </Link>
            </ListItem>
            <ListItem sx={{ p: 0, mb: 1 }}>
              <Link
                href="#"
                sx={{
                  color: 'primary.200',
                  '&:hover': { color: 'primary.50', textDecoration: 'none' }
                }}
              >
                Communauté
              </Link>
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <Link
                href="#"
                sx={{
                  color: 'primary.200',
                  '&:hover': { color: 'primary.50', textDecoration: 'none' }
                }}
              >
                Politique de confidentialité
              </Link>
            </ListItem>
          </List>
        </Grid>

        {/* Colonne Contact */}
        <Grid xs={12} md={4}>
          <Typography level="title-lg" sx={{ mb: 2, color: 'primary.50', fontWeight: 'lg' }}>
            Nous contacter
          </Typography>
         
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <FaPhone style={{ marginRight: '12px', color: '#d7a032' }} />
            <Typography sx={{ color: 'primary.200' }}>
              +243 843814574
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FaEnvelope style={{ marginRight: '12px', color: '#d7a032' }} />
            <Typography sx={{ color: 'primary.200' }}>
              contact@motemahub.tech
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box
        sx={{
          mt: 6,
          pt: 4,
          borderTop: '1px solid',
          borderColor: 'primary.700',
          textAlign: 'center'
        }}
      >
        <Typography sx={{ color: 'primary.300' }}>
          © {new Date().getFullYear()} MotemaHub. Tous droits réservés.
        </Typography>
      </Box>
    </Box>
  );
}