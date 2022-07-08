import { google } from 'googleapis'

export async function fetchCurricula() {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly']
    const client = new google.auth.JWT(
      process.env.CLIENT_EMAIL,
      null,
      process.env.PRIVATE_KEY,
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

  // try {
  //   const client = new google.auth.JWT(
  //     process.env.CLIENT_EMAIL,
  //     null,
  //     process.env.PRIVATE_KEY,
  //     ['https://www.googleapis.com/auth/spreadsheets']
  //   )

  //   client.authorize(async function (err, tokens) {
  //     if (err) {
  //       return res.status(400).send(JSON.stringify({ error: true }))
  //     }

  //     const gsapi = google.sheets({ version: 'v4', auth: client })

  //     const opt = {
  //       spreadsheetId: '1u-p159g3E8lue4fznYOnEmjUDWYV2b9Li92GbRljJVQ',
  //       range: 'Sheet1!A1:G',
  //     }
  //     let response = await gsapi.spreadsheets.values.get(opt)
  //     const rows = response.data.values
  //     rows.shift()
  //     if (rows.length) {
  //       const curricula = rows.map((row) => ({
  //         published: row[0],
  //         title: row[1],
  //         span: row[2],
  //         level: row[3],
  //         area: row[4],
  //         guide: row[5],
  //         calendar: row[6],
  //       }))
  //       return curricula
  //     }
  //   })
  // } catch (e) {
  //   console.log(e)
  // }
  // return []
}
