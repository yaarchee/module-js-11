import './styles.css';
import changeColor from "./js/changeColor";
import CountdownTimer from "./js/CountdownTimer";
import promises from "./js/promises/promisesDelay";
import promisesToggleUserState from "./js/promises/promisesToggleUserState";
import promisesMakeTransaction from "./js/promises/promisesMakeTransaction";


changeColor();

const countdownTimer= new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
countdownTimer.getReminderDate();


promises();
promisesToggleUserState();
promisesMakeTransaction();
