export interface ActionResponse {
  id: number;
  date: Date;
  sum: number;
  message: string;
  categoryId: number;
  category: string;
  categoryColor: string;
  accountId: number;
  account: string;
  userId: number | null;
}
