export class SayMyName {
    name: string = 'junwoo';
    div = document.querySelector('div');

    changeMyName(name: string): string {
        this.name = name;

        console.log(this.name);
        return this.name;
    }

    getMyName(): string {
        console.log(this.name);
        return this.name;
    }

    changeDivInnerText() {
        return this.div.innerText = 'inner...';
    }
}

const abc = new SayMyName();
abc.getMyName();
abc.changeMyName('yeoul');
abc.getMyName();

abc.changeDivInnerText();