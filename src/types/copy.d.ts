export type CopyListType = { id: number; content: string; isPinned: boolean };

export interface PostCopyList {
  resultList: { content: string }[];
}

export interface CopyGroup {
  copyId: number;
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
