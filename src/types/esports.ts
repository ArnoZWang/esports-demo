export interface GameHighlight {
  id: string;
  mediaUrl: string;
  mediaType: 'image' | 'gif' | 'video';
  description: string;
  gameData: {
    matchId: string;
    teams: {
      team1: string;
      team2: string;
    };
    type: string;
    timestamp: number;
    position: {
      x: number;
      y: number;
    };
    killerId?: number;
    assistingParticipantIds?: string;
    teamId: number;
    buildingType?: string;
    laneType?: string;
    towerType?: string;
    victimId?: number;
  };
  commentary: string;
} 