export interface UserModel {
  login: string;
  avatar_url: string;
  type: string;
}

export interface UserResponse {
  items: UserModel[];
  total_count: number;
}

export interface UserState {
  users: UserModel[];
  totalCount: number;
}
