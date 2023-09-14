use("db_patissier");
db.dropDatabase();
use("db_patissier");
db.createCollection("Cake");
db.Cake.insertMany([
   {
    _id : ObjectId(1),
    nome: "Bolo de Fuba",
    Peso: "3kg",
    Preco: 58,
    Ingredientes:[
        {
            "nome": "Fuba",
            "quantidade": "1kg"
          },
          {
            "nome": "Trigo",
            "quantidade":"500g"
          },
          {
            "nome": "Ovo",
            "quantidade": "4 unidades"
          }
    ]
   } ,
   {
    _id : ObjectId(2),
    nome: "Bolo de Maracuja",
    Peso: "2kg",
    Preco: 70,
    Ingredientes:[
        {
            "nome": "Maracuja",
            "quantidade": "500g"
          },
          {
            "nome": "Trigo",
            "quantidade":"550g"
          },
          {
            "nome": "Açucar",
            "quantidade":"3 xicaras"
          }
        ]
   },
   {
    _id : ObjectId(3),
    nome: "Bolo de Chocolate",
    Peso: "3,5kg",
    Preco: 70,
    Ingredientes:[
        {
            "nome": "Chocolate",
            "quantidade": "2kg"
          },
          {
            "nome": "Trigo",
            "quantidade":"450g"
          },
          {
            "nome": "Leite",
            "quantidade":"500ml"
          }
        ]
   },
   {
    _id : ObjectId(4),
    nome: "Bolo de Quatro Leites",
    Peso: "2,5kg",
    Preco: 100,
    Ingredientes:[
        {
            "nome": "Quatro Leites",
            "quantidade": "1kg"
          },
          {
            "nome": "Trigo",
            "quantidade":"650g"
          },
          {
            "nome": "Leite",
            "quantidade":"600ml"
          }
        ]
   }
])

//Excluir o documento com ObjectId(1)
use("db_patissier");
db.Cake.deleteOne({_id:ObjectId("00000001e960cc86f6364b0a")})


//Listar "nome" e "preco" de todos os bolos
use("db_patissier");
db.Cake.find({}, {nome:true,preco:true})

//Listar "nome" e "preco" de todos os bolos com o "preco" menor ou igual a 70.
use("db_patissier");
db.Cake.find({preco: {$lte: 70 }}, {nome:true,preco:true})

//Criar uma consulta que, usamos o uptade,mude o nome, peso e acrescente um ingredientes no bolo de ObjectId(2)
use("db_patissier");
db.Cake.updateOne(
  { _id: ObjectId("00000002e960cc86f6364b0b") },
  {
    $set: {
      nome: "Bolo de cenoura",
      Peso: "3kg",
    },
    $push: {
       Ingredientes:{
        nome: "Leite",
        quantidade: "350ml",
      },
    },
  }
)

//Criar um opdate que modifique 1 ingrediente de um bolo para: nome "ovo" e quantidade "3 unidades"
use("db_patissier");
db.Cake.updateOne(
  {
    _id: ObjectId("00000004e960cc86f6364b0d"),
    "Ingredientes.nome":"Leite"
  },
  {
    $set: {
      "Ingredientes.$.nome": "ovo",
      "Ingredientes.$.quantidade": "3 unidades"
    }
  }
)















