type children<'schema> = String(string) | Array(array<'schema>)

type rec teste = {
  component: string,
  children: children<teste>,
}

type schema = array<teste>

let rec createElement = (schema: schema, uiMap, actionsMap) => {
  let schemaToReactElement = schemaElement => {
    Js.log2(schemaElement.component, schemaElement.children)
    switch schemaElement.children {
    | Array(element) => createElement(element, uiMap, actionsMap)
    | String(element) => element
    }
  }

  let a = Belt.Array.map(schema, schemaToReactElement)

  // Js.log(a)
  "joao"
}

let teste = [
  {
    component: "retriever:div",
    children: Array([
      {
        component: "retriever:h1",
        children: String("Logo Housi"),
      },
      {
        component: "retriever:p",
        children: Array([
          {
            component: "retriever:span",
            children: String("Sua casa "),
          },
          {
            component: "retriever:span",
            children: String("joao:teste"),
          },
          {
            component: "retriever:span",
            children: String("joao:teste"),
          },
        ]),
      },
    ]),
  },
]

let te = createElement(teste, "ui", "actions")
