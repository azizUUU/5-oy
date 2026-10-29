let talabalar = [
  { ism: "Aziz", yosh: 16, ball: 85 },
  { ism: "Madina", yosh: 15, ball: 92 },
  { ism: "Jasur", yosh: 17, ball: 74 },
  { ism: "Dilnoza", yosh: 16, ball: 88 },
  { ism: "Sardor", yosh: 15, ball: 61 },
  { ism: "Kamola", yosh: 16, ball: 79 },
];

function talabaniChiqar(massiv) {
    let talabaList = document.getElementById("olQosh");
    
    massiv.forEach(talabachi => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${talabachi.ism}</strong>, ${talabachi.yosh} yosh, ball: ${talabachi.ball}`;
        talabaList.appendChild(li);
    });
}

talabaniChiqar(talabalar);

let highScoreList = document.getElementById("high-score-students");
let ballTop = talabalar.filter(student => student.ball > 80);

ballTop.forEach(student => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${student.ism}</strong>, ball: ${student.ball}`;
  highScoreList.appendChild(li);
});


const totalStudents = talabalar.length;


const totalScore = talabalar.reduce((sum, student) => sum + student.ball, 0);
const averageScore = (totalScore / totalStudents).toFixed(1);

const topStudent = talabalar.reduce((max, student) => student.ball > max.ball ? student : max, talabalar[0]);

const statsContainer = document.getElementById("statistics");
statsContainer.innerHTML = `
  Talabalar soni: ${totalStudents}<br>
  O'rtacha ball: ${averageScore}<br>
  Eng yuqori ball: ${topStudent.ism} (${topStudent.ball})
`;