export interface Product {
  canonical_url: string;
  collection_id?: number | null;
  comments_count: number;
  cover_image: string;
  created_at: string;
  crossposted_at?: string | null;
  description: string;
  edited_at?: string | null;
  flare_tag: FlareTag;
  id: number;
  language: string;
  last_comment_at: string;
  organization: Organization;
  path: string;
  positive_reactions_count: number;
  public_reactions_count: number;
  published_at: string;
  published_timestamp: string;
  readable_publish_date: string;
  reading_time_minutes: number;
  slug: string;
  social_image: string;
  subforem_id: number;
  tag_list: string[];
  tags: string;
  title: string;
  type_of: string;
  url: string;
  user: User;
}

export interface FlareTag {
  name: string;
  bg_color_hex: string;
  text_color_hex: string;
}

export interface Organization {
  name: string;
  username: string;
  slug: string;
  profile_image: string;
  profile_image_90: string;
}

export interface User {
  name: string;
  username: string;
  profile_image: string;
  twitter_username?: string | null;
  github_username?: string | null;
  user_id: number;
}
