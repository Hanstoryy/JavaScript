const student = {
    major : "컴퓨터공학부",
    idNum : 202066046,
    name : "조한서",
    age : 23,
    school : "Silla University",
    hello : "안녕"
}
for(key in student){
    document.write(`${key} : ${student[key]}<br>`)
}