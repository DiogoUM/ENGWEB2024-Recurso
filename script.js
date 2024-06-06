const fs = require('fs');
const data = fs.readFileSync('dataset-inicial.json');

const json = JSON.parse(data + ']');

for (let i = 0; i < json.length; i++) {
    json[i]._id = json[i].bookId; delete json[i].bookId
    if (!json[i].genres) json[i].genres = '';
    if (!json[i].awards) json[i].awards = '';
    if (!json[i].characters) json[i].characters = '';
    if (!json[i].ratingsByStars) json[i].ratingsByStars = '';
    if (!json[i].setting) json[i].setting = '';

    function replaceStr(s) {
        s = s.substring(1, s.length - 2);
        s = s.split("', '");
        s[0] = s[0].substring(1);
        s[s.length - 1] = s[s.length - 1].substring(0, s[s.length - 1].length - 1);
        return s
    }

    json[i].genres = replaceStr(json[i].genres);
    json[i].awards = replaceStr(json[i].awards);
    json[i].characters = replaceStr(json[i].characters);
    json[i].ratingsByStars = replaceStr(json[i].ratingsByStars);
    json[i].setting = replaceStr(json[i].setting);
}


fs.writeFileSync('dataset.json', JSON.stringify(json, null, 2));