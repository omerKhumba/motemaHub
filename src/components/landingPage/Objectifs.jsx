import { Box, Typography, Grid, styled } from '@mui/joy';
import { FaLightbulb, FaUsers, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const FeatureCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(3),
  borderRadius: theme.radius.xl,
  backgroundColor: theme.vars.palette.background.body,
  transition: 'all 0.4s ease',
  height: '100%',
  border: `none`,
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadow.md,
    borderColor: theme.vars.palette.primary[300],
    '& .feature-icon': {
      transform: 'scale(1.1)',
      color: theme.vars.palette.primary[500]
    }
  }
}));

const FeatureIconWrapper = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  padding: theme.spacing(2),
  borderRadius: theme.radius.lg,
  backgroundColor: `${theme.vars.palette.primary[100]}80`,
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  color: theme.vars.palette.primary[600]
}));

export default function Objectifs() {
  const objectifs = [
    {
      icon: <FaLightbulb size={24} />,
      title: "Visibilité des talents",
      texte: "Offrir un espace de visibilité aux talents du numérique.",
      color: "#3c6088"
    },
    {
      icon: <FaGraduationCap size={24} />,
      title: "Formations qualité",
      texte: "Permettre l'accès à des formations de qualité adaptées aux besoins du marché.",
      color: "#4a7c94"
    },
    {
      icon: <FaUsers size={24} />,
      title: "Réseau fiable",
      texte: "Créer un réseau de prestataires qualifiés pour entreprises et particuliers.",
      color: "#5a8ca0"
    },
    {
      icon: <FaLaptopCode size={24} />,
      title: "Autonomisation",
      texte: "Encourager l'indépendance professionnelle par les services en ligne.",
      color: "#6a9cac"
    },
  ];

  return (
    <Box
      sx={{
        py: 10,
        px: 2,
        background: 'radial-gradient(circle at center, #f9fbfd 0%, #eef2f6 100%)',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          textAlign: 'center',
          mb: 6
        }}
      >
        <Typography
          level="h2"
          sx={{
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            fontWeight: 'xl',
            color: 'primary.800',
            mb: 2,
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              borderRadius: '2px'
            }
          }}
        >
          Nos Ambitions
        </Typography>
        <Typography
          level="body1"
          sx={{
            color: 'neutral.700',
            maxWidth: '700px',
            mx: 'auto',
            fontSize: '1.1rem'
          }}
        >
          Nous construisons un écosystème complet pour les professionnels du numérique
        </Typography>
      </Box>

      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: '1100px',
          mx: 'auto',
          px: 2
        }}
      >
        {objectifs.map((obj, index) => (
          <Grid key={index} xs={12} sm={6} md={3}>
            <FeatureCard>
              <FeatureIconWrapper className="feature-icon">
                {obj.icon}
              </FeatureIconWrapper>
              <Typography
                level="h4"
                sx={{
                  mb: 1.5,
                  color: 'primary.700',
                  fontWeight: 'lg'
                }}
              >
                {obj.title}
              </Typography>
              <Typography
                level="body1"
                sx={{
                  color: 'neutral.600'
                }}
              >
                {obj.texte}
              </Typography>
            </FeatureCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}