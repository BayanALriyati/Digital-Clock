function Clock(){
    var today = new Date();    //انشاء كائن Date جديد للحصول ع التاريخ والوقت الحالي
    var hours = today.getHours();
    var minutes = today.getMinutes(); //تحديدالساعات والدقائق والثواني من الوقت الحالي 
    var seconds = today.getSeconds();
    let period ="AM" ; 

    //set the time period (AM/PM)
    if (hours >= 12){
        period = "PM" ;
    }
    
    //Javascript for switch clock format 
    const formatSwitchBtn = document.querySelector(".format-switch-btm");

    formatSwitchBtn.addEventListener("click", ()=>{
    formatSwitchBtn.classList.toggle("active");

    var formatValue = parseInt(formatSwitchBtn.getAttribute("data-format")); // لاسترداد قيمة خاصية معينة من عنصر HTML المحدد،
    if (formatValue === 12 ){
        formatSwitchBtn.setAttribute("data-format" , "24");
    }
    else{
        formatSwitchBtn.setAttribute("data-format" , "12");
    }
 
    });
    //set the 12-hour clock format
    var formatValue = parseInt(formatSwitchBtn.getAttribute("data-format")); // لاسترداد قيمة خاصية معينة من عنصر HTML المحدد،
    if (formatValue === 12 ){
    hours = hours > 12 ? hours % 12 : hours ;
    }
    

    //Add the 0 for the values lower than 10
    if (hours < 10 ){
        hours = "0" + hours ;
    }
    if (minutes < 10 ){
        minutes = "0" + minutes ;
    }
    if (seconds < 10 ){
        seconds = "0" + seconds ;
    }


    // يقوم بتحديد العناصر في مستند HTML باستخدام querySelector وتعيين قيم الساعات والدقائق والثواني والفترة إلى العناصر المطابقة
    document.querySelector(".hours").innerHTML = hours ;
    document.querySelector(".minutes").innerHTML = minutes ;
    document.querySelector(".seconds").innerHTML = seconds ;
    document.querySelector(".period").innerHTML = period ;

}
    //هذا الكود يستخدم setInterval() لتكرار تنفيذ وظيفة معينة بانتظام بفاصل زمني محدد. في هذه الحالة، يتم استدعاء وظيفة Clock() كل ثانية (بفاصل زمني 1000 مللي ثانية) باستخدام setInterval().
    //ومن المفترض أن تكون وظيفة Clock() مسؤولة عن تحديث الساعة على الصفحة، مثل تحديث الساعات والدقائق والثواني والفترة.
    // استدعاء setInterval() خارج دالة Clock() لتجنب التكرار اللامتناهي
    var updateClock = setInterval(Clock , 1000);

function DateTime(){
    var today = new Date(); 
    var monthName = today.toLocaleDateString("default" , {month:"short"});// يطبع اسم الشهر الحالي بتنسيق مختصر (مثل "Jan" ليناير)
    var dayName = today.toLocaleString("default" , {weekday:"long"}); // يطبع اسم اليوم الحالي بتنسيق طويل (مثل "Sunday" للأحد)
    var dayNumber = today.getDate();
    var year = today.getFullYear();

    document.querySelector(".month-name").innerHTML = monthName ;
    document.querySelector(".day-name").innerHTML = dayName ;
    document.querySelector(".day-number").innerHTML = dayNumber ;
    document.querySelector(".year").innerHTML = year ;
    
}
    var updateDate= setInterval(DateTime , 1000);
    
// استرجاع حالة التبديل من Local Storage عند تحميل الموقع
window.addEventListener("load", () => {
    const formatValue = localStorage.getItem("formatValue");
    if (formatValue) {
        // إعادة تعيين حالة التبديل
        const formatSwitchBtn = document.querySelector(".format-switch-btm");
        formatSwitchBtn.setAttribute("data-format", formatValue);
        formatSwitchBtn.classList.toggle("active", formatValue === "24");
    }
});

// التبديل بين تنسيق 12 و 24 ساعة
document.addEventListener("click", (event) => {
    const formatSwitchBtn = event.target.closest(".format-switch-btm");
    if (formatSwitchBtn) {
        formatSwitchBtn.classList.toggle("active");
        const formatValue = parseInt(formatSwitchBtn.getAttribute("data-format"));
        const newFormatValue = formatValue === 12 ? "24" : "12";
        formatSwitchBtn.setAttribute("data-format", newFormatValue);

        // حفظ حالة التبديل في Local Storage
        localStorage.setItem("formatValue", newFormatValue);
    }
});

//Javascript for dot menu toggle
const dotmenuBtn =document.querySelector(".dot-menu-btn");
const dotMenu =document.querySelector(".dot-menu");

//هذا الكود JavaScript يقوم بإضافة مستمع لحدث النقر (click) على زر القائمة (dotmenuBtn). عند حدوث النقر، يتم تنفيذ الدالة الوظيفية التي تم تمريرها إلى addEventListener. في هذه الحالة، الدالة الوظيفية تقوم بتبديل وجود الفئة "active" على عنصر القائمة (dotMenu) باستخدام classList.toggle().
dotmenuBtn.addEventListener("click", ()=>{
    dotMenu.classList.toggle("active");
});

document.addEventListener("click", (e)=>{
  if (e.target.id !== "active-menu"){
    dotMenu.classList.remove("active");
  }
});














