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
export type campaignsType = { campaignName: string | null; createdAt: string };

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
  campaigns: campaignsType[];
};

//고객 그룹 작성
export type ClientGroupCreateType = {
  groupName: string;
  fileOrgName: string;
  properties: { propertyValue: string }[];
};

//고객 엑셀 다운로드
export type ExcelDownloadType = {
  message: string;
};

//고객 그룹 즐겨찾기
export type ClientFavoritType = {
  likeCheck: boolean;
};
