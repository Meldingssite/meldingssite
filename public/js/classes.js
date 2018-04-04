/* CLASSES */
class JSONExport {
    constructor() {
        this.pages = [];
    }

    addPage(page)
    {
        this.pages.push(page);
    }
}


class Page {
    constructor() {
        this.content = [];
    }

    addContent(content)
    {
        this.content.push(content);
    }

    clearContent()
    {
        this.content = [];
    }
}

class Textbox {
    constructor(text, color) {
        this.type = "textbox";
        this.text = text;
        this.color = color;
    }
}

class Button {
    constructor(name, image_url) {
        this.type = "button";
        this.name = name;
        this.image_url = image_url;
    }
}

class Form {
    constructor() {
        this.type = "form";
        this.formAction = "";
        this.content = [];
    }
}

class TextInput {
    constructor(text, name, inhoud) {
        this.type = "textInput";
        this.text = text;
        this.name = name;
        this.inhoud = inhoud;
    }
}

class RadioButton {
    constructor(text) {
        this.type = "radioButtons";
        this.text = text;
        this.options = [];
    }
}

class RadioButtonOption {
    constructor(name, option, text) {
        this.type = "radioButtonOption";
        this.name = name;
        this.option = option;
        this.text = text;
    }
}