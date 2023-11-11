import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dn2l0nfh3",
  api_key: "516967694852757",
  api_secret: "tjmmLIAvpbvG9w6caho73YiKDxE",
});

cloudinary.search
  .expression("folder:film-photos")
  .sort_by("public_id", "desc")
  .max_results(200)
  .execute()
  .then((result) => {
    fs.writeFileSync("photos.json", JSON.stringify(result.resources));
  })
  .catch((error) => console.error(error));
