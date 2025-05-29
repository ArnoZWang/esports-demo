import { Card, CardContent, CardMedia, Typography, Box, Paper } from '@mui/material';
import type { GameHighlight as GameHighlightType } from '../types/esports';

interface GameHighlightProps {
  highlight: GameHighlightType;
}

export const GameHighlight = ({ highlight }: GameHighlightProps) => {
  return (
    <Card sx={{ 
      maxWidth: 1200, 
      margin: '20px auto', 
      backgroundColor: 'transparent',
      color: 'white',
      position: 'relative',
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: '16px',
        padding: '2px',
        background: 'linear-gradient(45deg, #00ff9d, #00b26d)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        pointerEvents: 'none',
      }
    }}>
      <Box sx={{ 
        width: { xs: '100%', md: '50%' },
        minHeight: { xs: '300px', md: '600px' },
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Box sx={{ 
          position: 'relative',
          flex: 1,
          overflow: 'hidden',
        }}>
          <CardMedia
            component={highlight.mediaType === 'video' ? 'video' : 'img'}
            image={highlight.mediaUrl}
            alt="Game highlight"
            sx={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              borderTopLeftRadius: '16px',
              borderTopRightRadius: { xs: '16px', md: 0 },
            }}
            controls={highlight.mediaType === 'video'}
          />
        </Box>
        <Box sx={{ 
          p: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(10px)',
          borderBottomLeftRadius: { md: '16px' },
          borderBottomRightRadius: { xs: '16px', md: 0 },
        }}>
          <Typography variant="body2" sx={{ 
            color: '#fff',
            lineHeight: 1.6,
            fontSize: '0.9rem',
          }}>
            {`This highlight showcases an intense moment from the ${highlight.gameData.event}. ${highlight.gameData.players[0].name} on ${highlight.gameData.players[0].champion} demonstrates exceptional skill and game sense, making a crucial play that could turn the tide of the match between ${highlight.gameData.teams.team1} and ${highlight.gameData.teams.team2}.`}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ 
        width: { xs: '100%', md: '50%' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" component="div" sx={{ 
              mb: 1,
              background: 'linear-gradient(45deg, #fff 30%, #00ff9d 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {highlight.gameData.teams.team1} vs {highlight.gameData.teams.team2}
            </Typography>
          </Box>

          <Paper sx={{ 
            p: 3, 
            mb: 3, 
            backgroundColor: 'rgba(0, 255, 157, 0.05)',
            border: '1px solid rgba(0, 255, 157, 0.1)',
            borderRadius: '12px',
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="h6" sx={{ color: '#00ff9d' }}>
                Game Data
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#00ff9d',
                  filter: 'drop-shadow(0 0 8px rgba(0, 255, 157, 0.3))',
                  animation: 'pulse 2s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.1)' },
                    '100%': { transform: 'scale(1)' }
                  }
                }}
              >
                🎮
              </Typography>
            </Box>
            <Typography variant="body2" component="pre" sx={{ 
              whiteSpace: 'pre-wrap',
              fontFamily: '"JetBrains Mono", monospace',
              color: '#ddd',
              fontSize: '0.9rem',
              lineHeight: 1.6,
            }}>
              {JSON.stringify(highlight.gameData, null, 2)}
            </Typography>
          </Paper>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8,
                color: '#ccc',
                fontSize: '1.1rem',
                '& .highlight-player': {
                  color: '#00ff9d',
                  fontWeight: 'bold',
                },
                '& .highlight-champion': {
                  color: '#ff6b6b',
                  fontWeight: 'bold',
                },
                '& .highlight-action': {
                  color: '#4dabf7',
                  fontWeight: 'bold',
                },
                '& .highlight-objective': {
                  color: '#ffd43b',
                  fontWeight: 'bold',
                }
              }}
              dangerouslySetInnerHTML={{ __html: highlight.commentary }}
            />
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#00ff9d',
                filter: 'drop-shadow(0 0 8px rgba(0, 255, 157, 0.3))',
                animation: 'float 3s ease-in-out infinite',
                '@keyframes float': {
                  '0%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-5px)' },
                  '100%': { transform: 'translateY(0px)' }
                }
              }}
            >
              🤖
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}; 