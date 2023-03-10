export type CopyListType = { copyId: number; content: string; isPinned: boolean };

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
export interface CopyGroupsResult {
  groupList: CopyGroup[];
  totalCopy: number;
}

export interface CopyLikeResult {
  favorite: boolean;
}

export interface CopyDetailResult {
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
