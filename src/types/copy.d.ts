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
  totalCopyCount: number;
  totalCopy: number;
}

export interface LikeResult {
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
  createdAt: string;
  targetAge: string;
  targetGender: string;
  copyList: CopyListType[];
}

export interface CopyCondition {
  brandName: string;
  createCount: number;
  keyword: string;
  productName: string;
  type: string;
  sector: string;
  targetAge: string;
  targetGender: string;
}
