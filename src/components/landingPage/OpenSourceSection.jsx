import { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  IconButton,
  Grid,
  Sheet,
  styled
} from '@mui/joy';
import { FaGithub, FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const GlowButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
    transform: 'rotate(45deg)',
    transition: 'all 0.6s ease',
    opacity: 0
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 6px 20px ${theme.vars.palette.primary[500]}33`,
    '&::before': {
      opacity: 1,
      animation: 'shine 1.5s infinite'
    }
  },
  '@keyframes shine': {
    '0%': { transform: 'rotate(45deg) translateX(-100%)' },
    '100%': { transform: 'rotate(45deg) translateX(100%)' }
  }
}));

const RepoCard = ({ name, description, stars, forks, watchers }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      variant="outlined"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        height: '100%',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? 'lg' : 'sm',
        background: 'linear-gradient(to bottom right, #ffffff 0%, #f8f9fa 100%)',
        borderColor: 'neutral.300'
      }}
    >
      <Typography level="h4" sx={{ mb: 1, color: 'primary.700' }}>
        {name}
      </Typography>
      <Typography level="body2" sx={{ mb: 2, color: 'neutral.600' }}>
        {description}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <FaStar color="#ffac33" />
          <Typography level="body3">{stars}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <FaCodeBranch color="#6cc644" />
          <Typography level="body3">{forks}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <FaEye color="#4078c0" />
          <Typography level="body3">{watchers}</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default function OpenSourceSection() {
  const [repos, setRepos] = useState([
    {
      name: 'Motema Core',
      description: 'Bibliothèque principale du framework Motema',
      stars: 254,
      forks: 32,
      watchers: 45
    },
  ]);

  return (
    <Sheet
      variant="soft"
      sx={{
        py: 10,
        px: 2,
        background: 'radial-gradient(circle at top left, #f8f9fa 0%, #e9ecef 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(36,41,46,0.03) 0%, transparent 100%)',
          zIndex: 0
        }
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          position: 'relative',
          zIndex: 1
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            mb: 6,
            position: 'relative',
            '&::after': {
              content: '""',
              display: 'block',
              width: '80px',
              height: '4px',
              mx: 'auto',
              mt: 3,
              borderRadius: '2px'
            }
          }}
        >
          <Typography
            level="h2"
            sx={{
              mb: 2,
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              fontWeight: 'xl',
              color: 'primary.800',
              letterSpacing: 'tight'
            }}
          >
            Nous façonnons l'Open Source
          </Typography>
          <Typography
            level="body1"
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              color: 'neutral.700',
              fontSize: '1.1rem'
            }}
          >
            Notre engagement envers l'innovation ouverte et le partage des connaissances
            nous pousse à contribuer activement à l'écosystème.
          </Typography>
        </Box>

        

        <Box sx={{ textAlign: 'center' }}>
          <GlowButton
            component="a"
            href="https://github.com/omerKhumba"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            startDecorator={<FaGithub size={20} />}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 'xl',
              fontWeight: 'lg',
              boxShadow: 'md',
              background: 'linear-gradient(135deg, #24292e 0%, #2d3339 100%)'
            }}
          >
            Explorer nos projets
          </GlowButton>
        </Box>
      </Box>
    </Sheet>
  );
}