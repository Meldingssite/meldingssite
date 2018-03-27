/* CLASSES */
class JSONExport
{
    constructor()
    {
        this.pages = [];
    }
}


class page
{
    constructor()
    {
        this.content = [];
    }
}

class textbox
{
    constructor(text, color)
    {
        this.type   = "textbox";
        this.text   = text;
        this.color  = color;
    }
}

class button
{
    constructor(name, image_url)
    {
        this.type       = "button";
        this.name       = name;
        this.image_url  = image_url;
    }
}

class form
{
    constructor()
    {
        this.type       = "form";
        this.formAction = "";
        this.content    = [];
    }
}

class textInput
{
    constructor(text, name, inhoud)
    {
        this.type   = "textInput";
        this.text   = text;
        this.name   = name;
        this.inhoud = inhoud;
    }
}

class radioButton
{
    constructor(text)
    {
        this.type    = "radioButtons";
        this.text    = text;
        this.options = [];
    }
}

class radioButtonOption
{
    constructor(name, option, text)
    {
        this.type   = "radioButtonOption";
        this.name   = name;
        this.option = option;
        this.text   = text;
    }
}