/**
 * export the data into excel file
 */
import ExportJsonExcel from "js-export-excel";

/**
 * @function @name exportExcel
 * excel flie
 */
function exportExcel(keys, data) {
  let option = {};
  option.fileName = "Infromation in Excel";
  option.datas = [
    {
      sheetData: data,
      sheetName: "sheet",
      sheetHeader: keys,
    },
  ];
  var toExcel = new ExportJsonExcel(option);
  toExcel.saveExcel();
}

export default exportExcel;
