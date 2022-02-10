# Vue-cms

## Описание
```
CMS платформа для создания ИС на vue
```

<details><summary>Autogenerate form</summary>


### Компонент для автоматического создания формы на основе json
#### Входные параметры
- formFields - список полей для формы
  `
  (type: Array,
  required: true)
  `
- dateFormat - формат даты 
  `
  type: String,
  default: "yyyy-MM-dd",
  `
- formRules - правила валидации для формы
  `
  type: Array,
  `
- saveForm - обработка сохранения данных с формы

**Example:**
```js
let formFields = [
        {
          label: "anyString",
          name: "anyString",
          placeholder: "anyString",
          type: "TEXT|SELECT|DATE",
        },
      ];
      
let dateFormat = "anyString";
      
let formRules = {
        ameField: [
          {
            required: boolean,
            message: "Please input Activity name",
            trigger: "blur",
          },
        ],
      };

saveForm = (form) => {
  console.log(form);
}
```

**Use example**
```vue
  <autogenerate-form
      :form-rules="rules"
      @saveForm="saveForm"
      :form-fields="fields"
      :date-format="dateFormat"
    ></autogenerate-form>

  <script>
  export default {
    name: "example",
    components: { AutogenerateForm, CustomTable },
    data() {
      return {
        dateFormat: "yyyy-MM-dd",
        rules: {
          test: [
            {
              required: true,
              message: "Please input Activity name",
              trigger: "blur",
            },
          ],
        },
        fields: [
          {
            label: "TEST",
            name: "test",
            placeholder: "testPl",
            type: "TEXT",
          },
        ],
      };
    },

    methods: {
      saveForm(form) {
        console.log(form);
      },
    },
  };

  </script>
```

</details>

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
