interface quoteData {
  id: number;
  quote_quotation: string;
  quote_translation: string;
}

interface quoteDataState {
  data: quoteData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export type { quoteData, quoteDataState };
