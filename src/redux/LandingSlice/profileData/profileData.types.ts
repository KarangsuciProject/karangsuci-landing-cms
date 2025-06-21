interface profileData {
  id: number;
  profile_title: string;
  profile_description: string;
}

interface profileDataState {
  data: profileData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export type { profileData, profileDataState };
