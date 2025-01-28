export interface ActionResponse {
  id: number | null;
  date: Date | undefined;
  sum: number | undefined;
  message: string | undefined;
  categoryId: number | undefined;
  category: string | undefined | null;
  categoryColor: string | undefined | null;
  accountId: number | undefined;
  account: string | undefined | null;
  userId: number | null | null;
}
