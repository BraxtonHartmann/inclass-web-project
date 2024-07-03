
document.write('<table style="border: 1px black solid; border-collapse: collapse;">')
for(let i = 1; i < 13; i++){
    document.write('<tr>')
    for(let j = 1; j < 13; j++){
        document.write('<td style="border: 1px black solid; border-collapse: collapse;">')
        document.write(i*j)
        document.write('</td>')
    }
    document.write('</tr>')
}
document.write('</table>')