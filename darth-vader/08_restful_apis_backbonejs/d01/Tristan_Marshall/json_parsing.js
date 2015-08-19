var greatLakes = {
  huron: 'Lake Huron',
  ontario: 'Lake Ontario',
  michigan: 'Lake Michigan',
  erie: 'Lake Erie',
  superior: 'Lake Superior'
};

var lakesJSON = JSON.stringify(greatLakes)

lakesJSON
"{"huron":"Lake Huron","ontario":"Lake Ontario","michigan":"Lake Michigan","erie":"Lake Erie","superior":"Lake Superior"}"
lakesJS

var lakesJS = JSON.parse(lakesJSON)

lakesJS
Object {huron: "Lake Huron", ontario: "Lake Ontario", michigan: "Lake Michigan", erie: "Lake Erie", superior: "Lake Superior"}

for (var key in lakesJS) {console.log(key + ": " + lakesJS[key])}
huron: Lake Huron
ontario: Lake Ontario
michigan: Lake Michigan
erie: Lake Erie
superior: Lake Superior
