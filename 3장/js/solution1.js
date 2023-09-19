const num = [1, 3, 5, 7, 11, 13, 17, 19, 23];
//반복문 for로 배열에서 10보다 큰 값 출력
document.write("10보다 큰 값(for문) : ")
for(let i = 0;i<num.length;i++){
    if(num[i]>10){
        document.write(`${num[i]} `);
    }
}

//반복문 forEach로 배열에서 10보다 큰값 출력
document.write("<br>10보다 큰 값(forEach문) : ")
num.forEach(function(number){
    if(number > 10){
        document.write(`${number} `);
    }
})

//반복문 for..of로 배열에서 10보다 큰 값 출력하기
document.write("<br>10보다 큰 값(for of문) : ")
for(number of num){
    if(number>10){
        document.write(`${number} `);
    }
}