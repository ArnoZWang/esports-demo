export interface GameHighlight {
  id: string;
  mediaUrl: string;
  mediaType: 'image' | 'gif' | 'video';
  gameData: {
    matchId: string;
    teams: {
      team1: string;
      team2: string;
    };
    event: string;
    players: {
      name: string;
      champion: string;
      role: string;
    }[];
  };
  commentary: string;
} 