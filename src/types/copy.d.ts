export type CopyListType = { id: number; content: string; isPinned: boolean };

export interface PostCopyList {
  resultList: { content: string }[];
}

export interface CopyGroup {
  id: number;
  createDate: string;
  like: boolean;
  copyName: string;
  tag: string;
}
export interface CopyGroupsReturn {
  groupList: CopyGroup[];
  totalCopy: number;
}

export interface CopyLikeReturn {
  favorite: boolean;
}

export interface CopyDetailReturn {
  copyGroupName: string;
  tag: string;
  brandName: string;
  productName: string;
  keyword: string;
  type: string;
  createCount: number;
  copyLength: number;
  copyList: CopyListType[];
}
