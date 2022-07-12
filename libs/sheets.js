import { google } from 'googleapis'
import { createCurriculaObject, slugify } from '../utils'

export async function fetchAllCurricula() {
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
        published: row[0] || null,
        title: row[1] || null,
        span: row[2] || null,
        level: row[3] || null,
        area: row[4] || null,
        guide: row[5] || null,
        calendar: row[6] || null,
      }))
    }
  } catch (err) {
    console.log(err)
  }
  return []
}

export async function fetchFilteredCurricula(span, area) {
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
    if (span && area) {
      let filteredRows = rows.filter(
        (row) =>
          row[0] === 'TRUE' &&
          slugify(row[2]) === span &&
          slugify(row[4]) === area
      )
      if (filteredRows.length) {
        return createCurriculaObject(filteredRows)
      }
    } else if (!area) {
      let filteredRows = rows.filter(
        (row) => row[0] === 'TRUE' && slugify(row[2]) === span
      )
      if (filteredRows.length) {
        return createCurriculaObject(filteredRows)
      }
    }
  } catch (err) {
    console.log(err)
  }
  return []
}
