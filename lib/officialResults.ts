import type { ScoresByMatch } from './rules';

export type OfficialResult = {
  matchNo: number;
  date: string; // Fecha local de Monterrey, YYYY-MM-DD
  home: number;
  away: number;
  source: string;
  sourceUrl?: string;
  lastUpdated: string;
};

export const OFFICIAL_RESULTS: OfficialResult[] = [
  { matchNo: 1, date: '2026-06-11', home: 2, away: 0, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 2, date: '2026-06-11', home: 2, away: 1, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 3, date: '2026-06-12', home: 1, away: 1, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 4, date: '2026-06-12', home: 4, away: 1, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 5, date: '2026-06-13', home: 0, away: 1, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 6, date: '2026-06-13', home: 2, away: 0, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 7, date: '2026-06-13', home: 1, away: 1, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 8, date: '2026-06-13', home: 1, away: 1, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 9, date: '2026-06-14', home: 1, away: 0, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 10, date: '2026-06-14', home: 7, away: 1, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 11, date: '2026-06-14', home: 2, away: 2, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 12, date: '2026-06-14', home: 5, away: 1, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 13, date: '2026-06-15', home: 1, away: 1, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 14, date: '2026-06-15', home: 0, away: 0, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 15, date: '2026-06-15', home: 2, away: 2, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 16, date: '2026-06-15', home: 1, away: 1, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 17, date: '2026-06-16', home: 3, away: 1, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 18, date: '2026-06-16', home: 1, away: 4, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 19, date: '2026-06-16', home: 3, away: 0, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 20, date: '2026-06-16', home: 3, away: 1, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 21, date: '2026-06-17', home: 1, away: 0, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 22, date: '2026-06-17', home: 4, away: 2, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 23, date: '2026-06-17', home: 1, away: 1, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 24, date: '2026-06-17', home: 1, away: 3, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 25, date: '2026-06-18', home: 1, away: 1, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 26, date: '2026-06-18', home: 4, away: 1, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
  { matchNo: 27, date: '2026-06-18', home: 6, away: 0, source: 'Marcador publicado / FIFA Match Centre', lastUpdated: '2026-06-19T00:15:00-06:00' },
];

export function seededOfficialScores(): ScoresByMatch {
  return Object.fromEntries(
    OFFICIAL_RESULTS.map((result) => [result.matchNo, { home: result.home, away: result.away }])
  ) as ScoresByMatch;
}
