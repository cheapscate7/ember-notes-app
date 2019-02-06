import Component from '@ember/component';


export default class SearchComponent extends Component.extend({
  active: false,
  titleText: "",
  contentText: "",
  actions: {
    toggleActivation() {
        this.set("active", !this.active);
        //if we have activated the new note input then focus on the new note content
        if(this.active) { 
          setTimeout(() => {
            document.getElementById("new-note-content")!.focus();
          }, 0);
        } else if (this.contentText.length > 0) {
          //send note
        }

        
    },
    titleUpdate(event: string) {
      this.set("titleText", event);
    },
    contentUpdate() {
      this.set("contentText", event);
    }
  }
}) {
};
