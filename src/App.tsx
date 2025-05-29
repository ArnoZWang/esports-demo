import { Container, CssBaseline, ThemeProvider, createTheme, Select, MenuItem, FormControl, Box, Typography, Tooltip } from '@mui/material';
import { GameHighlight } from './components/GameHighlight';
import type { GameHighlight as GameHighlightType } from './types/esports';
import { useState } from 'react';
import highlightsData from './data/highlights.json';
import { QRCodeSVG } from 'qrcode.react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff9d',
      light: '#33ffb1',
      dark: '#00b26d',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.25px',
    },
    h6: {
      fontWeight: 600,
      color: '#00ff9d',
    },
    body1: {
      lineHeight: 1.8,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          background: 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: '12px 16px',
        },
      },
    },
  },
});

function App() {
  const highlights = highlightsData.highlights as GameHighlightType[];
  const [selectedHighlight, setSelectedHighlight] = useState<string>(highlights[0].id);
  const loading = false;

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <h1 style={{ 
          textAlign: 'center', 
          color: '#fff',
          marginBottom: '3rem',
          fontSize: '3rem',
          fontWeight: 'bold',
          textShadow: '0 0 20px rgba(0, 255, 157, 0.3)',
          background: 'linear-gradient(45deg, #fff 30%, #00ff9d 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
        }}>
          <span style={{ 
            filter: 'drop-shadow(0 0 8px rgba(0, 255, 157, 0.3))',
            animation: 'pulse 2s ease-in-out infinite',
          }}>
            🎮
          </span>
          LoL Esports Commentary Generation
        </h1>
        <style>
          {`
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.1); }
              100% { transform: scale(1); }
            }
          `}
        </style>
        
        <Box sx={{ 
          maxWidth: 400, 
          mx: 'auto', 
          mb: 6,
          '& .MuiFormControl-root': {
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 24px rgba(0, 255, 157, 0.15)',
            },
          }
        }}>
          <FormControl fullWidth variant="outlined">
            <Select
              value={selectedHighlight}
              onChange={(e) => setSelectedHighlight(e.target.value)}
              disabled={loading}
              sx={{ 
                color: '#fff',
                '.MuiOutlinedInput-notchedOutline': { 
                  borderColor: '#333',
                  transition: 'all 0.3s ease',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': { 
                  borderColor: '#00ff9d',
                  borderWidth: '2px',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { 
                  borderColor: '#00ff9d',
                  borderWidth: '2px',
                },
                '& .MuiSelect-icon': { 
                  color: '#00ff9d',
                  transition: 'transform 0.3s ease',
                },
                '&.Mui-focused .MuiSelect-icon': {
                  transform: 'rotate(180deg)',
                },
                height: '56px',
                backgroundColor: 'rgba(0, 255, 157, 0.05)',
                backdropFilter: 'blur(10px)',
                '& .MuiSelect-select': {
                  padding: '16px',
                  fontSize: '1rem',
                  fontWeight: 500,
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: '#1a1a1a',
                    marginTop: '8px',
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    '& .MuiMenuItem-root': {
                      color: '#fff',
                      padding: '12px 16px',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 255, 157, 0.1)',
                      },
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(0, 255, 157, 0.15)',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 255, 157, 0.2)',
                        },
                      },
                    },
                  },
                },
              }}
            >
              {highlights.map((highlight) => (
                <MenuItem key={highlight.id} value={highlight.id}>
                  {highlight.gameData.teams.team1} vs {highlight.gameData.teams.team2}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <GameHighlight 
          highlight={highlights.find(h => h.id === selectedHighlight)!} 
        />

        <Box sx={{ 
          textAlign: 'center', 
          mt: 6,
          mb: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          '& a': {
            color: '#00ff9d',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#fff',
              textShadow: '0 0 8px rgba(0, 255, 157, 0.5)',
            }
          }
        }}>
          <Typography variant="body2" sx={{ color: '#888' }}>
            More Information:{' '}
            <a 
              href="https://github.com/ArnoZWang/esports-data-to-text" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://github.com/ArnoZWang/esports-data-to-text
            </a>
          </Typography>
          <Tooltip title="Scan to visit GitHub repository" arrow>
            <Box sx={{ 
              p: 2, 
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 255, 157, 0.2)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 6px 16px rgba(0, 255, 157, 0.3)',
              }
            }}>
              <QRCodeSVG 
                value="https://github.com/ArnoZWang/esports-data-to-text"
                size={128}
                level="H"
                includeMargin={true}
                imageSettings={{
                  src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwZmY5ZCIgZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnptMCAxOGMtNC40MTggMC04LTMuNTgyLTgtOHMzLjU4Mi04IDgtOCA4IDMuNTgyIDggOC0zLjU4MiA4LTggOHoiLz48cGF0aCBmaWxsPSIjMDBmZjlkIiBkPSJNMTIgNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNiA2LTIuNjg2IDYtNi0yLjY4Ni02LTYtNnptMCAxMGMtMi4yMSAwLTQtMS43OS00LTRzMS43OS00IDQtNCA0IDEuNzkgNCA0LTEuNzkgNC00IDR6Ii8+PC9zdmc+",
                  height: 24,
                  width: 24,
                  excavate: true,
                }}
              />
            </Box>
          </Tooltip>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App; 