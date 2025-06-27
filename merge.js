import { readFileSync, writeFileSync } from "fs";

// Đọc dữ liệu từ 2 file
const mathDb = JSON.parse(readFileSync("mathDb.json", "utf8"));
const literatureDb = JSON.parse(readFileSync("literatureDb.json", "utf8"));
const chemistryDb = JSON.parse(readFileSync("chemistryDb.json", "utf8"));
const physicsDb = JSON.parse(readFileSync("physicsDb.json", "utf8"));
const testSample = JSON.parse(readFileSync("testSample.json", "utf8"));

// Gộp lại (sẽ có { accounts, tasks })
const merged = {
  ...mathDb,
  ...literatureDb,
  ...chemistryDb,
  ...physicsDb,
  ...testSample,
};

// Ghi ra file mới
writeFileSync("mergedDb.json", JSON.stringify(merged, null, 2));
console.log("✅ mergedDb.json đã được tạo!");