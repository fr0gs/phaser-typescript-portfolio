module Portfolio.Gui {
  export class Gui {
    mainScreen: any;

    constructor(mainScreen?: any) {
      this.aboutScreen = {
        //this ID must be unique, it'll help you easily access the gui component throught EZGUI.components.myWindow
        id: 'about',

        //this the component ID, EZGUI define those components: Window, Button, Checkbox, Slider, Radio...
        //but you can create your own components or extend existing
        component: 'Window',

        //create a header and use blueheader skin
        header: {
          id: 'titlebar',
          skin: 'blueheader',
          position: {
            x: 0,
            y: 0
          },
          height: 60,
          text: 'Hello! I am Esteban :)'
        },

        //when a header is defined, and the window is draggable,
        //the drag handler is set to the header
        draggable: true,

        //This is the padding space from the component borders
        padding: 4,

        //component position relative to parent
        position: { x: 100, y: 100 },


        width: 500,
        height: 500,

        //Some components like Window support children
        //in this case, children node will be parsed and components added to the parent
        //you can also add children programmatically
        children: [

        ]
      }
    }
  }
}
