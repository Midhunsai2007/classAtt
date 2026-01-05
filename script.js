function toggleSubjects(){
    const s = document.getElementById("subjectSelect");
    s.style.display = s.style.display === "none" ? "block" : "none";
}

const students = [
{r:"99240040066",n:"JUJJAVARAPU RISHYENDRA"},
{r:"99240040874",n:"CHALLA VARUN KUMAR"},
{r:"99240040875",n:"CHALLA CHARUKESH"},
{r:"99240040876",n:"CHAPPIDI AJAYKUMAR VENKAT"},
{r:"99240040877",n:"CHERUKUNOORI MIDHUN SAI"},
{r:"99240040878",n:"CHENNAM VENKATA SANTOSH"},
{r:"99240040879",n:"NACHUKURU MANJUNATH"},
{r:"99240040880",n:"PAPPREDDY ISHITA REDDY"},
{r:"99240040881",n:"DUDDEKUNTA SRI VYSHNAV REDDY"},
{r:"99240040882",n:"DIVYA PRABHA A"},
{r:"99240040883",n:"DEVANDLA YUVIKA"},
{r:"99240040884",n:"DEVARINTI PAVAN KUMAR REDDY"},
{r:"99240040886",n:"DONKINA DURGA NAGA VENKATA"},
{r:"99240040887",n:"DONGA MANI KUMARI"},
{r:"99240040888",n:"RAMI REDDY ADARSH KUMAR REDDY"},
{r:"99240040889",n:"SUDALAGUNTA PRAVEEN KUMAR"},
{r:"99240040891",n:"DUDEKULA FEROZ"},
{r:"99240040892",n:"DESHAM SANTOSH REDDY"},
{r:"99240040893",n:"DERANGULA RAVI TEJA"},
{r:"99240040894",n:"DODDAVULA DINESH REDDY"},
{r:"99240040895",n:"DERANGULA HEMA LATHA"},
{r:"99240040896",n:"DEERAJ A S"},
{r:"99240040897",n:"DEVARAVULA RAJESH"},
{r:"99240040898",n:"DORADLA NAGA VENKATA SRIKAR"},
{r:"99240040899",n:"DUDEKULA DHARMATEJA"},
{r:"99240040900",n:"DHANUNJAY MAITY"},
{r:"99240040901",n:"SUBBARA INDUJA"},
{r:"99240040902",n:"DEVABATHINI CHARISHMA"},
{r:"99240040903",n:"DOKKARI AKSHAY KUMAR YADAV"},
{r:"99240040904",n:"THALLURI SAI JASWANTH"},
{r:"99240040905",n:"THANDIGIKUNTA CHANDRASHEKAR"},
{r:"99240040906",n:"GARLAPATI ESWAR DATTHA"},
{r:"99240040907",n:"GOPAVARAM SIVAKESHAVA REDDY"},
{r:"99240040908",n:"GOOTY MAHIND"},
{r:"99240040909",n:"THALLURI THIRUPATHI RAO"},
{r:"99240040913",n:"THANAKANTI RAKSHITHA"},
{r:"99240040915",n:"THARIBOINA BALU HARI"},
{r:"99240040917",n:"GARAGA UMA RAMALINGESWARA"},
{r:"99240040919",n:"GANJI ESWAR"},
{r:"99240040920",n:"K G NAN JASHWANTH"},
{r:"99240040921",n:"INDUKURI NAVEEN VARMA"},
{r:"99240040922",n:"VEERAMREDDY AJAY KUMAR REDDY"},
{r:"99240040923",n:"GONUGUNTLA JEEVAN SAI"},
{r:"99240040924",n:"GOLLAPALLI ARUN KUMAR"},
{r:"99240040925",n:"GEDDAM PAVAN KUMAR"},
{r:"99240040926",n:"GARSIKUTI SATISH"},
{r:"99240040927",n:"GAVVALA OMSAI"},
{r:"99240040929",n:"KIRAN KRISHNA"},
{r:"99240040930",n:"VIPPARLA VENKATA RAO"},
{r:"99240040931",n:"NAVUDU OMKAR"},
{r:"99240040933",n:"ITHA REVANTH MANI PULLARAO"},
{r:"99240040934",n:"INDU J R"},
{r:"99240040935",n:"HAMSHINI RAJAN A R K"},
{r:"99240040936",n:"GUVVALA DHARANI KUMAR"},
{r:"99240040937",n:"INDURI SATHVIKA"},
{r:"99240040938",n:"HALVI LINGA"},
{r:"99240040939",n:"INNAMURI YADUNANDAN GUPTA"},
{r:"99240040940",n:"GUVVALA SAI DURGA SANDEEP REDDY"},
{r:"99240040941",n:"GUTTI SIVARAMAKRISHNA"},
{r:"99240040942",n:"HARINI J"},
{r:"99240040944",n:"SANTHIYA S"},
{r:"99240040945",n:"KAAVALI VINEETH"},
{r:"99240040946",n:"KAMMARAPALLI ARJUN"},
{r:"99240040947",n:"KAMALAMARRY JAHNAVI"},
{r:"99240040948",n:"NALLADIMMU NAGA LAKSHMAN"},
{r:"99240040949",n:"KANCHARLA POORNACHANDRA"},
{r:"99240040950",n:"KANAKALA VENKATA PRADEEP"},
{r:"99240040952",n:"RAYADURGAM NARAYANA REDDY"},
{r:"99240040953",n:"SALAVALAPUDI MADHUSUDHAN"}
];

let presentCount = students.length;
let absentCount = 0;

const body = document.getElementById("body");

students.forEach(s=>{
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td class="reg">${s.r}</td>
        <td class="name">${s.n}</td>
        <td><button class="present">Present</button></td>
    `;
    const btn = tr.querySelector("button");
    btn.onclick = ()=>{
        if(btn.classList.contains("present")){
            btn.className = "absent";
            btn.textContent = "Absent";
            presentCount--;
            absentCount++;
        }else{
            btn.className = "present";
            btn.textContent = "Present";
            presentCount++;
            absentCount--;
        }
        document.getElementById("present").textContent = presentCount;
        document.getElementById("absent").textContent = absentCount;
    };
    body.appendChild(tr);
});

document.getElementById("present").textContent = presentCount;
document.getElementById("absent").textContent = absentCount;
