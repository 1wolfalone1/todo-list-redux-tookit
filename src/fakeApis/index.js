import { Model, createServer } from "miragejs";

export const setupServer = () => {
   createServer({
      models: {
         todos: Model,
      },
      routes() {
         this.get("/api/todos", (schema) => {
            return schema.todos.all();
         });
         this.post("/api/todos", (schema, request) => {
            console.log('asfasdfasfasdfa');
            const payload = JSON.parse(request.requestBody);
            return schema.todos.create(payload);
         });

         this.post('/api/updateCompletedTodo', (schema, request) => {
            const payload = JSON.parse(request.requestBody);

            const currentTodo = schema.todos.find(payload);

            currentTodo.update({completed: !currentTodo.completed});
         })
      }
   });
};
// {
//    todos: [
//       {
//          id: 1123213123123,
//          name: "Learn yoga",
//          completed: false,
//          priority: "Medium",
//       },
//       {
//          id: 244444444444444,
//          name: "Learn java",
//          completed: true,
//          priority: "Medium",
//       },
//       {
//          id: 32323231313,
//          name: "Learn gym",
//          completed: false,
//          priority: "Medium",
//       },
//    ],
// }
