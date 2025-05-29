import { useState, useEffect, useRef } from 'react';
import { Typography } from '@mui/material';

interface TypingTextProps {
  text: string;
  isTyping: boolean;
  onTypingComplete?: () => void;
}

export const TypingText = ({ text, isTyping, onTypingComplete }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIsTypingRef = useRef(isTyping);

  useEffect(() => {
    // Only reset when isTyping changes from false to true
    if (isTyping && !prevIsTypingRef.current) {
      setDisplayedText('');
      setCurrentIndex(0);
    }
    prevIsTypingRef.current = isTyping;

    if (!isTyping) {
      return;
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30); // Adjust typing speed here

      return () => clearTimeout(timeout);
    } else if (onTypingComplete) {
      onTypingComplete();
    }
  }, [currentIndex, text, isTyping, onTypingComplete]);

  return (
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
      dangerouslySetInnerHTML={{ __html: displayedText }}
    />
  );
}; 