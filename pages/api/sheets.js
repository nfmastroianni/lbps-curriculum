import { google } from "googleapis";
import keys from "../../keys";

export default function handler(req, res) {
  try {
    const client = new google.auth.JWT(
      process.env.CLIENT_EMAIL,
      null,
      process.env.PRIVATE_KEY,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    client.authorize(async function (err, tokens) {
      if (err) {
        return res.status(400).send(JSON.stringify({ error: true }));
      }

      const gsapi = google.sheets({ version: "v4", auth: client });

      const opt = {
        spreadsheetId: "1u-p159g3E8lue4fznYOnEmjUDWYV2b9Li92GbRljJVQ",
        range: "Sheet1!A1:G",
      };
      let data = await gsapi.spreadsheets.values.get(opt);
      return res
        .status(200)
        .send(JSON.stringify({ error: false, data: data.data.values }));
    });
  } catch (e) {
    return res
      .status(400)
      .send(JSON.stringify({ error: true, message: e.message }));
  }
}
