export type CopyListType = { id: number; content: string; isPinned: boolean };

export interface PostCopyList {
  resultList: { content: string }[];
}
