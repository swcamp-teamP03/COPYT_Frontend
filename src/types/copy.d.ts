export type CopyListType = { copyId: number; content: string; isPinned: boolean };

export interface PostCopyList {
  resultList: { content: string }[];
}

export interface CopyGroup {
  copyId: number;
  createDate: string;
  favorite: boolean;
  copyName: string;
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
  brandName: string;
  productName: string;
  keyword: string;
  type: string;
  createCount: number;
  copyLength: number;
  sector: string;
  copyList: CopyListType[];
}

export interface CopyCondition {
  brandName: string;
  copyLength: number;
  createCount: number;
  keyword: string;
  productName: string;
  type: string;
  sector: string;
}
