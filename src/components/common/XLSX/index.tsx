import React from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import Button from '../Button';

const ReactExcelDownload = () => {
  const data = [
    {
      id: 1,
      고객명: '나원웅',
      고객전화번호: '010-0000-0000',
    },
    {
      id: 2,
      고객명: '홍길동',
      고객전화번호: '010-1234-0000',
    },
  ];

  const excelFileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const excelFileExtension = '.xlsx';
  const excelFileName = '고객 정보 업로드양식';

  const excelDownload = (excelData: any) => {
    const ws = XLSX.utils.aoa_to_sheet([['고객명', '고객전화번호']]);
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
