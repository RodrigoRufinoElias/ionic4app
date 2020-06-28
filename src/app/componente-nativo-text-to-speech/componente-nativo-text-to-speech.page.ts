import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-componente-nativo-text-to-speech',
  templateUrl: './componente-nativo-text-to-speech.page.html',
  styleUrls: ['./componente-nativo-text-to-speech.page.scss'],
})
export class ComponenteNativoTextToSpeechPage implements OnInit {
  
  textoASerFalado : string = 'Olá mundo';
  
  constructor(private tts : TextToSpeech) { }

  ngOnInit() {
  }

  falar(){
    this.tts.speak({
      text : this.textoASerFalado,
      locale: 'pt-BR',
      rate: 0.75
    })
    .then(()=>{
      alert('Falou com sucesso!');
    })
    .catch((erro : any)=>{
      alert(erro);
    })
  }

}
