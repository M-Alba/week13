# week13

Ответы на вопросы:

1. Как создать дату 24 января 2021 года, 22 часа 51 минута? Временная зона — местная.

let date = new Date(2021, 0, 24, 22, 51);
console.log(date);

2. Для чего предназначен метод getDay()?

getDay() — возвращает день недели от `0` (воскресенье) до `6` (суббота).

3. Как посчитать, сколько секунд осталось до завтра?

function getSecondsToTomorrow() {
let now = new Date();

// завтрашняя дата
let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

let diff = tomorrow - now; // разница в миллисекундах
return Math.round(diff / 1000); // преобразуем в секунды
}

4. Для чего предназначен метод getDate()?
   getDate() предназначен для получения дня месяца, от 1 до 31.

5. Что выведет console.log(d) ?
   let d = new Date(2016, 2, 9);
   console.log(d);

Ответ: Wed Mar 09 2016 00:00:00 GMT+0500 (Екатеринбург, стандартное время)

6. Что делает getTimezoneOffset() ?

getTimezoneOffset() возвращает разницу в минутах между местным часовым поясом и UTC.

7. Что выведет консоль?
   let date = new Date();
   console.log(date.getUTCHours());

Ответ: 14. Метод getUTCHours() возвращает часы указанной даты по всемирному координированному времени.

8. Для чего предназначен метод getHours() объекта Date?

Метод getHours() возвращает часы указанной даты по местному времени.

9. Что выведет консоль?
   let d = new Date();
   let y = d.getFullYear();
   console.log(y);

Ответ: 2023

10. В чём ошибка в коде?
    let y = new Date();
    let d = y.getDate();
    console.log(d);

Ответ: данный код возвращает день месяца из текущей даты. Ошибки не вижу.
