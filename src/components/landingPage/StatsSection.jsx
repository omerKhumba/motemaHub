import { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/joy';
import CountUp from 'react-countup';

import bg from '../../assets/BB.jpg'

export default function EffectifSection() {
  const [memberCount, setMemberCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const count = 2000; // à remplacer par ton API plus tard
      setMemberCount(count);
    };
    fetchCount();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        width: '100%',
        minHeight: 400,
      }}
    >
      {/* Partie gauche image */}
      <Box
        className="show-left"
        sx={{
          flex: 1,
          backgroundImage: 'url('+bg+')', // Remplace par ton image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight:250,
        }}
      />

      {/* Partie droite contenu */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#3d6285', // bleu similaire à ton image
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: { xs: 3, md: 5 },
        }}
      >
        <Box
          sx={{
            borderBottom: '3px solid #d7a032',
            width: '60px',
            mb: 2,
          }}
        />

        <Typography className="text-white" level="h2" fontWeight="xl" sx={{ mb: 2 }}>
          + <CountUp end={memberCount} duration={2.5} separator=" " /> membres actifs
        </Typography>

        <Typography className="text-white" level="body-lg" sx={{ mb: 3 }}>
          Découvrez notre communauté grandissante de membres engagés. Rejoignez-nous
          pour faire partie d'un réseau dynamique et contribuer à nos projets et
          initiatives.
        </Typography>
        
        <div>
            <Button
            variant="solid"
            sx={{
                backgroundColor: '#d7a032',
                color: 'black',
                borderRadius: 'sm',
                px: 3,
                py: 1.5,
                fontWeight: 'md',
                '&:hover': {
                backgroundColor: '#c2952d',
                },
            }}
            endDecorator="→"
            href="#rejoindre"
            >
            S'INSCRIRE
            </Button>
        </div>
      </Box>
    </Box>
  );
}
