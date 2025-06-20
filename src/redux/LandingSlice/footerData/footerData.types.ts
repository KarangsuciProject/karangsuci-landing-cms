interface footerData {
  id: number;
  footer_email: string;
  footer_phone: string;
}

interface footerDataState {
  data: footerData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export type { footerData, footerDataState };
