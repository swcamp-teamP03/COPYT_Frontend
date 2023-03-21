import React from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
// import * as XLSXStyle from 'xlsx-style';
import Button from '../Button';

const ReactExcelDownload = () => {
  const data = [
    {
      id: '',
      고객명: '',
      고객전화번호: '',
    },
    {
      id: '',
      고객명: '',
      고객전화번호: '',
    },
  ];

  const excelFileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const excelFileExtension = '.xlsx';
  const excelFileName = '고객 정보 업로드양식';

  const styles = {
    red: { font: { color: { rgb: 'FF0000' } } },
  };

  const excelDownload = (excelData: any) => {
    const ws = XLSX.utils.aoa_to_sheet([
      ['고객명', '고객전화번호'],
      ['나원웅', '010-0000-0000'],
      ['위 정보는 예시입니다. 작성 시 예시와 동일하게 하이픈 (-) 을 꼭 포함하여 번호를 작성해주세요.', styles.red],
      ['1행을 제외하고 예시와 설명 문구는 삭제 후 2행부터 고객 DB를 작성 해주세요.', styles.red],
      ['파일 업로드 시 확장자 xls. , xlsx 로만 업로드 해주세요.', styles.red],
    ]);

    //엑셀 key
    excelData.map((data: any) => {
      XLSX.utils.sheet_add_aoa(ws, [[data.고객명, data.고객전화번호]], { origin: -1 });
      ws['!cols'] = [{ wpx: 200 }, { wpx: 200 }];
      //행 사이즈
      return false;
    });
    const wb: any = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelButter = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const excelFile = new Blob([excelButter], { type: excelFileType });
    FileSaver.saveAs(excelFile, excelFileName + excelFileExtension);
  };

  const ExcelDownload = () => {
    excelDownload(data);
  };

  return (
    <div>
      <Button title="양식 파일 다운로드" buttonColor="blue" borderRadius="10px" isDisabled={false} onButtonClick={ExcelDownload}></Button>
    </div>
  );
};

export default ReactExcelDownload;
