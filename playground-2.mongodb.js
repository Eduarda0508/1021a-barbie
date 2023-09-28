use("bd_sorveteria")
db.createCollection("sorvete");
db.sorvete.insertMany([
    {
        sabor:"Abacaxi",
        preco_kg:10,
    },
    {
        sabor:"Nutela",
        preco_kg:40,
    },
    {
        sabor:"Morango",
        preco_kg:20,
    },
    {
        sabor:"Banana",
        preco_kg:5,
    },
    {
        sabor:"Leite Condensado",
        preco_kg:40,
    },
    {
        sabor:"Chocolate",
        preco_kg:42.5,
    },
    {
        sabor:"Flocos",
        preco_kg:52.99,
    },
    {
        sabor:"Tomate",
        preco_kg:59.99,
    },
    {
        sabor:"Floresta Ilicita",
        preco_kg:49.99,
    }
]);

// 1) Listar todos os sorvetes.
use("bd_sorveteria")
db.sorvete.find({}, {nome:true});

// 2) Listar os sorvetes com preco_kg < 40
use("bd_sorveteria")
db.sorvete.find({preco_kg: {$lt: 40 }});

// 3) Listar o id e preço do sorvete de banana
use("bd_sorveteria")
db.sorvete.find({sabor:"Banana"}, { _id: true, preco_kg: true });

// 4) Listar os sorvetes com preco_kg >=20
use("bd_sorveteria")
db.sorvete.find({ preco_kg: { $gte: 20 }});

// 5) Listar os nomes dos sorvetes com preco_kg > 20 e <=40
use("bd_sorveteria")
db.sorvete.find({preco_kg: {$gte:20, $lt: 40}}, {sabor:true,_id:false});

// 6) Listar os nomes dos sorvetes com preco_kg >10 e <=44
use("bd_sorveteria")
db.sorvete.find({preco_kg: {$gt: 10, $lte:44}}, {sabor:true,_id:false});

// 7) Listar os nomes dos sorvetes com preco_kg <=10 ou >40
use("bd_sorveteria")
db.sorvete.find({$or:[{preco_kg:{$lte:10}},{preco_kg:{$gt:40}}]}, {sabor:true,_id:false});

// 8)  Criar uma consulta para monstar a média dos preços dos sorvetes.
use("bd_sorveteria")
db.sorvete.aggregate([{ $group: { _id: null, media_precos: {$avg:"$preco_kg"}}}]);

// 9) Mostrar o nome do sorvete com o menor preco_kg
use("bd_sorveteria")
db.sorvete.aggregate([{ $sort: {preco_kg: 1 }}, {$limit:1}, {$project:{_id:0, sabor:1}}]);

// 10) Inserir um sorvete no banco de dados.
use("bd_sorveteria")
db.sorvete.insert({sabor: "Uva", preco_kg: 15});