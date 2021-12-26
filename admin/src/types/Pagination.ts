export interface Pagination<T> {
  current_page: number;
  data: Array<T>;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Array<{ url: string; label: string; active: boolean }>;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}
