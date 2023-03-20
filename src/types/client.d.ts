export type ClientListType = { clientId: number; content: string };

export interface PostClientList {
  resultList: { content: string }[];
}

//고객 그룹 목록
export type ClientGroup = {
  customerGroupId: number;
  groupName: string;
  customerCnt: number;
  favorite: boolean;
  date: string;
};

export interface ClientGroupsResult {
  groupList: ClientGroup[];
  totalGroupCount: number;
  totalGroupPage: number | undefined;
}

//고객 그룹 상세
export type CampaignsType = { campaignId: number; campaignName: string | null; createdAt: string };

export type ExcelFileType = {
  excelFileName: string;
  excelFileSize: string;
  excelUploadTime: string;
  customerCnt: number;
};

export type CustomerGroup = {
  groupName: string;
  createdAt: string;
  customerProperties: { propertyValue: string }[];
  excelFile: ExcelFileType;
  campaigns: CampaignsType[];
};

//고객 그룹 작성 ,고객그룹 수정
export type ClientGroupCreateType = {
  groupName: string;
  fileOrgName: string;
  properties: { propertyValue: string }[];
};

//고객 엑셀 다운로드
export type ExcelDownloadType = {
  downloadReason: string;
  password: string;
};

//고객 그룹 즐겨찾기
export type ClientFavoritType = {
  likeCheck: boolean;
};
