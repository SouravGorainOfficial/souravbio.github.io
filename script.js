// typing
var typed = new Typed(".auto_type", {
    strings: ["Web Developer", "Web Designer", "App Developer", "React Developer"],
    typeSpeed: 100,
    BackSpeed: 100,
    loop: true
})
// typing

let image = document.querySelector(".image-img");


// Form Validation
const form = document.getElementById("form");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const massage = document.getElementById("massage");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})

// validate form
const validate = () => {
    const nameVal = name.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const massageVal = massage.value.trim();

    if (nameVal === "") {
        setErrorMsg(name, "Name can not be blank");
    } else if (nameVal.length < 4) {
        setErrorMsg(name, "Name is too short");
    }
    else {
        setSucessMsg(name);
    }

    if (phoneVal === "") {
        setErrorMsg(phone, "Phone no can not be blank");
    } else if (phoneVal.length < 10) {
        setErrorMsg(phone, "Phone no must be 10 digit");
    } else if (phoneVal.length >= 11) {
        setErrorMsg(phone, "Phone no must be 10 digit");
    }
    else {
        setSucessMsg(phone);
    }

    if (emailVal === "") {
        setErrorMsg(email, "Email can not be blank");
    } else {
        setSucessMsg(email);
    }

    if (massageVal === "") {
        setErrorMsg(massage, "Massage can not be blank");
    } else if (massageVal.length <= 20) {
        setErrorMsg(massage, "Massage must be 20 character");
    }
    else {
        setSucessMsg(massage);
    }

}

function setErrorMsg(input, errormsgs) {
    const formGroup = input.parentElement;
    const span = formGroup.querySelector('span');
    formGroup.className = "form_group error";
    span.innerText = errormsgs;
}

function setSucessMsg(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form_group sucess";
}


const work_observer = document.querySelector(".succeaaful_student")
const workObserver = new IntersectionObserver((entries, observer) => {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) return;
    const myNum = document.querySelectorAll(".count");
    // console.log(myNum);

    let speed = 20;

    myNum.forEach((myCount) => {
        let targer_count = myCount.dataset.count;
        let init_count = +myCount.innerText;

        let new_incre_num = Math.floor(targer_count / speed);

        const updatedNumber = () => {
            init_count += new_incre_num;
            myCount.innerText = init_count;
            if (init_count < targer_count) {
                setTimeout(() => {
                    updatedNumber()

                }, 100)
            }
        }
        updatedNumber()
    })
    observer.unobserve(work_observer)
}, {
    root: null,
    threshold: 0
})
workObserver.observe(work_observer);

