// @flow
export type UserType = {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
  created_at: string
}

export type ItemType = {
  id: number;
  title: string;
  content: string;
  completed: boolean;
  category: string;
  subcategory: string;
  url: string;
  recommended_by_id: any;
  user_id: number;
  created_at: string
}
