interface heroData {
  id: number;
  hero_title: string;
  hero_subtitle: string;
  hero_url: string;
  hero_bg_url: string;
}

interface heroDataState {
  data: heroData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export type { heroData, heroDataState };
