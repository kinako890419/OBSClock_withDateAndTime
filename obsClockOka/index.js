class DigitalClock{
    constructor(element){
        this.element = element;
    }
    start(){
        this.update();
        setInterval(() => {
            this.update();
        },100);//update every 100 miliseconds
    }
    update(){
        const parts = this.getTimeParts();
        //若不是十位數，前面加零
        const secondFormatted = parts.second.toString().padStart(2,"0");
        const minuteFormatted = parts.minute.toString().padStart(2,"0");
        const hourFormatted = parts.hour.toString().padStart(2,"0");
        const timeFormatted = `${hourFormatted}:${minuteFormatted}:${secondFormatted}`;
        const years = parts.year.toString();
        const mon = parts.month.toString().padStart(2,"0");
        const day = parts.date.toString().padStart(2,"0");
        //const dd = parts.day.toString();

        const dateFormatted = `${years} / ${mon} / ${day} `;
        //console.log(timeFormatted);
        const AmPm = parts.isAM ? "AM" : "PM";//?then :otherwise
        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = AmPm;
        this.element.querySelector(".dates").textContent = dateFormatted;

        //img
        //var bodyUrl = "./img/img{id}.PNG";
        //$("#clockbody").attr("src",bodyUrl.replace("{id}", (second%2)));
    }
    getTimeParts(){//current time
        const now = new Date();
        return{
            hour: now.getHours()%12 || 12,//12小時制
            minute: now.getMinutes(),
            second: now.getSeconds(),
            isAM: now.getHours() < 12,
            //console.log(clockObject.getTimeParts());
            //year: now.getFullYear(),
            //month: now.getMonth(),
            year: now.getFullYear(),
            month: now.getMonth()+1,
            date: now.getDate(),
            day: now.getDay()
        };
    }
    
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);
clockObject.start();