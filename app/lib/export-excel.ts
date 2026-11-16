import type { Registration } from "./registrations";

const dateFormatter = new Intl.DateTimeFormat("vi-VN", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export function formatDateTime(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return dateFormatter.format(date);
}

export async function exportRegistrationsToExcel(
  rows: Registration[],
  filename = "danh-sach-dang-ky.xlsx",
) {
  const ExcelJS = await import("exceljs");
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "Website lập trình";
  workbook.created = new Date();

  const sheet = workbook.addWorksheet("Danh sách đăng ký", {
    views: [{ state: "frozen", ySplit: 1 }],
  });

  sheet.columns = [
    { header: "STT", key: "index", width: 8 },
    { header: "Họ và tên", key: "full_name", width: 32 },
    { header: "Số điện thoại (Zalo)", key: "phone", width: 24 },
    { header: "Thời gian đăng ký", key: "created_at", width: 24 },
  ];

  rows.forEach((row, index) => {
    sheet.addRow({
      index: index + 1,
      full_name: row.full_name,
      phone: row.phone,
      created_at: formatDateTime(row.created_at),
    });
  });

  const header = sheet.getRow(1);
  header.font = { bold: true, color: { argb: "FFFFFFFF" } };
  header.alignment = { vertical: "middle", horizontal: "center" };
  header.height = 22;
  header.eachCell((cell) => {
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF2186F5" },
    };
    cell.border = {
      bottom: { style: "thin", color: { argb: "FF0F53B0" } },
    };
  });

  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    row.alignment = { vertical: "middle" };
    if (rowNumber % 2 === 0) {
      row.eachCell((cell) => {
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FFF1F6FF" },
        };
      });
    }
  });

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
