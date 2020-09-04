import itemsTemplates from '../templates/itemsTemplates.hbs'

export  default  class CountdownTimer {
  constructor({selector, targetDate}) {
    this.timerRef = document.querySelector(selector);
    this.targetDate = targetDate;
    this.arrItems = ['days', 'hours', 'minutes', 'seconds'];
    this.init();
    this.targetDateRef = document.querySelector('.target-data').textContent = `Целевая дата ${targetDate}` ;
    this.secsRef = document.querySelector('span[data-value=seconds]');
    this.minsRef = document.querySelector('span[data-value=minutes]');
    this.hoursRef = document.querySelector('span[data-value=hours]');
    this.dayssRef = document.querySelector('span[data-value=days]');


  }


  getReminderDate(){
    setInterval(()=>{

      console.log()
      const tempDate = this.targetDate.getTime() - Date.now();
      this.parseDate(tempDate);

    }, 1000)
  }

  pad(value){
    return String(value).padStart(2, 0);
  }

  parseDate(tempDate){
    /*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
    const days = this.pad(Math.floor(tempDate / (1000 * 60 * 60 * 24)));

    /*
     * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
     * остатка % и делим его на количество миллисекунд в одном часе
     * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
     */
    const hours =this.pad(Math.floor((tempDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) ;

    /*
     * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
     * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
     */
    const mins = this.pad(Math.floor((tempDate % (1000 * 60 * 60)) / (1000 * 60)));

    /*
     * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
     * миллисекунд в одной секунде (1000)
     */
    const secs = Math.floor((tempDate % (1000 * 60)) / 1000);

    this.secsRef.textContent = secs;
    this.minsRef.textContent = mins;
    this.hoursRef.textContent = hours;
    this.dayssRef.textContent = days;
  }
  init(){
       this.timerRef.insertAdjacentHTML('beforeend', itemsTemplates(this.arrItems ));

  }




}
