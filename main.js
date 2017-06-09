var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

var formElement = document.querySelector('.formElement');  
var body = document.querySelector('body');
var title = document.querySelector('.title');

function main(){
    createH1(title, 'Sign Up For My Web App', 'title');
    for (var i = 0; i < formData.length; i++){
        if (formData[i]["type"] == 'text' || formData[i]["type"] == 'tel' || formData[i]["type"] == 'email'){
            createTextInput(formData[i], formElement);
        } else if (formData[i]["type"] == 'textarea'){
            createTextArea(formData[i], formElement);
        } else {
            createOption(formData[i], formElement);
        }
    }
    var div = document.createElement('div');
    div.classList = 'sub-div';
    formElement.appendChild(div);
    var newdiv = document.querySelector('.sub-div');
    createSubmitBtn(newdiv);
}

function createH1(parent, text, classid){
    var heading = document.createElement('h1');
    heading.textContent = text;
    heading.classList = classid;
    parent.appendChild(heading);
}
function createTextInput(values, parent){
    var inputfield = document.createElement('INPUT');
    inputfield.type = values.type;
    inputfield.placeholder = values.label;
    inputfield.id = values.id;
    parent.appendChild(inputfield);
}
function createTextArea(values, parent){
    var inputfield = document.createElement('textarea');
    inputfield.placeholder = values.label;
    inputfield.id = values.id;
    parent.appendChild(inputfield);
}
function createOption(values, parent){
    var inputfield = document.createElement('select');
    inputfield.placeholder = values.label;
    inputfield.id = values.id;
    parent.appendChild(inputfield);
    inputfield = document.querySelector("select");
    var def = document.createElement('option');
    def.innerHTML = 'Select language...';
    inputfield.appendChild(def);
    for (var i = 0; i < values.options.length; i++){
        optionfield = document.createElement('option');
        optionfield.innerHTML = values.options[i]['label'];
        optionfield.value = values.options[i].value;
        inputfield.appendChild(optionfield);
    }
}
function createSubmitBtn(parent){
    var submitbtn = document.createElement('input');
    submitbtn.type = 'submit';
    submitbtn.classList = 'submit';
    submitbtn.value = 'Submit Form';
    parent.appendChild(submitbtn);
}

main();