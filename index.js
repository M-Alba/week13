const nameInput = document.querySelector("#userName");
const avatarInput = document.querySelector("#userAvatar");
const textarea = document.querySelector("#userComment");
const button = document.querySelector(".button");

const messages = document.querySelector(".messages");

const defaultAvatars = [
    './assets/images/img1.png',
    './assets/images/img2.png',
    './assets/images/img3.png',
    './assets/images/img4.png',
    './assets/images/img5.png',
    './assets/images/img6.png',
    './assets/images/img7.png',
    './assets/images/img8.png'
]

const checkName = () => {
    const name = nameInput.value;
    const userName = name.trim().split(" ");
    const changedName = [];


    userName.forEach((element) => {
        let newName = element[0].toUpperCase() + element.slice(1).toLowerCase();
        changedName.push(newName);
    });

    const nameFormatted = changedName.join(" ");
    return nameFormatted;
};

nameInput.addEventListener("change", () => {
    nameInput.value = checkName();
});

//Проверка на спам
const checkMessage = (spam) => {
    const str = spam.replace(/viagra|виагра/gi, "***");
    return str;
};

//Отправка сообщения
const createMessage = () => {
    const message = document.createElement("div");
    message.className = "message";
    messages.prepend(message);

    //аватар
    const userAvatar = document.createElement("img");
    userAvatar.className = "message_avatar";

    if (avatarInput.value !== "") {
        userAvatar.src = avatarInput.value;
    } else userAvatar.src = defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)];
    message.append(userAvatar);

    //имя пользователя
    const messageUserName = document.createElement("p");
    messageUserName.className = "message_name";

    if ((yes.checked) && (nameInput.value !== "")) {
        messageUserName.textContent = checkName();
    } else if ((yes.checked) && (nameInput.value === "")) {
        messageUserName.textContent = "Username";
    } else if ((no.checked) && ((nameInput.value !== "") || (nameInput.value === ""))) {
        messageUserName.textContent = "Username";
    } else {
        messageUserName.textContent = "Username";
    }
    message.append(messageUserName);

    //дата и время сообщения
    const dateMessage = document.createElement("p");
    dateMessage.className = "message_time";
    dateMessage.textContent = new Date().toLocaleString();
    message.append(dateMessage);

    //текст сообщения
    const messageText = document.createElement("p");
    messageText.className = "message_text";
    messageText.innerHTML = checkMessage(textarea.value);
    message.append(messageText);
    /*nameInput.value = "";
    avatarInput.value = "";*/

};

button.addEventListener("click", () => {
    createMessage();
    nameInput.value = "";
    avatarInput.value = "";
    textarea.value = "";
});