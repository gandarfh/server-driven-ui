let schemaToReactElement = schemaElement => {
  Js.log(schemaElement)
  "teste"
}

let createElement = (schema, uiMap, actionsMap) => {
  Js.log(uiMap)
  Js.log(actionsMap)
  Belt.Array.map(schema, schemaToReactElement)
}

type children<'schema> = [string | array<'schema>]

type teste = {
  component: string,
  children: children<teste>,
}

let teste = [
  {
    component: "retriever:div",
    children: [
      {
        component: "retriever:h1",
        children: "Logo Housi",
      },
      {
        component: "retriever:p",
        children: [
          {
            component: "retriever:span",
            children: "Sua casa ",
          },
          {
            component: "retriever:span",
            children: "joao:teste",
          },
          {
            component: "retriever:span",
            children: "joao:teste",
          },
        ],
      },
    ],
  },
]
createElement(teste, "ui", "actions")
