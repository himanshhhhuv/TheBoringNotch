export interface Release {
  name: string;
  tag_name: string;
  published_at: string;
  assets: Asset[];
}

export interface Asset {
  name: string;
  browser_download_url: string;
  size: number;
}
