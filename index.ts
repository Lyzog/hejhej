module com.teknikgymnasium.programering {

    export class Lektion2 {
        protected _testveriabel: number = 0;

        constructor() {

        }

        public Helloworld() {
            console.log("hello world");
        }
    }
}

var minklass = new com.teknikgymnasium.programering.Lektion2();
minklass.Helloworld();