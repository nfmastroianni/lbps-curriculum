import { google } from 'googleapis'

export async function fetchCurricula() {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets']
    const keys = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEYS)
    const privateKey = keys.private_key.replace(new RegExp('\\\\n', 'g'), '\n')
    const client = new google.auth.JWT(
      keys.client_email,
      null,
      privateKey,
      target
    )

    const gsapi = google.sheets({ version: 'v4', auth: client })
    const response = await gsapi.spreadsheets.values.get({
      spreadsheetId: '1u-p159g3E8lue4fznYOnEmjUDWYV2b9Li92GbRljJVQ',
      range: 'Sheet1',
    })

    const rows = response.data.values
    rows.shift()
    if (rows.length) {
      return rows.map((row) => ({
        published: row[0],
        title: row[1],
        span: row[2],
        level: row[3],
        area: row[4],
        guide: row[5],
        calendar: row[6],
      }))
    }
  } catch (err) {
    console.log(err)
  }
  return []
}
