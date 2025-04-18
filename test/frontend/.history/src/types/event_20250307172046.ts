export interface EventResponse {
  contentId: number;

  title: string | null;

  createdTime: string | null;
  modifiedTime: string | null;

  addr1: string | null;
  addr2: string | null;

  area: string | null;

  firstImage: string | null;
  firstImage2: string | null;

  mapX: number | null;
  mapY: number | null;

  zipCode: string | null;

  homepage: string | null;

  overview: string | null;

  eventStartDate: string | null;
  eventEndDate: string | null;

  playTime: string | null;

  useTimeFestival: string | null;

  sponsor1: string | null;
  sponsor1Tel: string | null;

  sponsor2: string | null;
  sponsor2Tel: string | null;

  dbUpdatedAt: string;
}