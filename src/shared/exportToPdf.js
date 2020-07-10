import jsPDF from "jspdf";
import "jspdf-autotable";

/**
 * @function @name exportPdf
 * pdf flie for the users table
 */
function exportPdf(keys, dataTable) {
  const unit = "pt";
  const size = "A4";
  const orientation = "portrait";

  const marginLeft = 40;
  const doc = new jsPDF(orientation, unit, size);

  doc.setFontSize(15);

  const title = "Users List";
  const headers = [keys];

  const data = dataTable.map((elt) => [
    elt.name,
    elt.email,
    elt.mobile,
    elt.address,
  ]);

  let content = {
    startY: 50,
    head: headers,
    body: data,
  };

  doc.text(title, marginLeft, 40);
  doc.autoTable(content);
  doc.save("report.pdf");
}

export default exportPdf;
