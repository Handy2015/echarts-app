import config from 'app/core/config';
import './clippy.css!';
import './clippy';

export class LogsPageCtrl {

  constructor() {
    this.name = config.bootData.user.name;
    window.clippy.load('Clippy', (agent) => {
      agent.show();
      agent.moveTo(300, 300);
      agent.play('GetAttention');
      agent.speak("It looks like you're writing a plugin \n\n Would you like help?");
      agent.speak("Feel free to pass by our irc channel #grafana @ freenode");
      agent.animate();

      setInterval(() => {
        agent.animate();
      }, 30000);
    });
  }

}
LogsPageCtrl.templateUrl = 'components/logs.html';


