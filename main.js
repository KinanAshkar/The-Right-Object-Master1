var info = {
    student1:{
        firstName: "Kinan",
        lastName: "Ashkar",
        jobTitle: "Student",
        startDate: "2019",
        birthday: "17.03.1981",
        manager: {
            firstName: "Niels",
            lastName: "Poensgen"
        }
        },
    student2:{
        firstName: "Hosam",
        lastName: "Majdi",
        jobTitle: "Student",
        startDate: "2019",
        birthday: "10.08.1982",
        manager: {
            firstName: "Niels",
            lastName: "Poensgen"
        }   
}
};
// Lösung 1:
/* document.getElementById("output").innerHTML = 
`<div class="card">
    <h1>${info.firstName} ${info.lastName}</h1>
    <p><label>Position: </label>${info.jobTitle}</p>
    <p><label>Joined: </label>${info.startDate}</p>
    <p><label>Birthday: </label>${info.birthday}</p>
    <p><label>Reports to: </label>${info.manager.firstName} ${info.manager.lastName}</p>
</div>`; */

// Lösung 2:
const uncompiled = document.getElementById("card-template").innerHTML;
const compiled = Handlebars.compile(uncompiled);
const compiledWithObject = compiled(info);

// append to html
document.getElementById("output").innerHTML = compiledWithObject;