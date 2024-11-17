import express from 'express'

const app=express();

app.get('/api/products',(req,res)=>{
    const products=
       
        [
            {
              "id": 1,
              "name": "table-plastic",
              "price": 250,
               image:'https://www.istockphoto.com/photo/indian-spectacled-cobra-showing-spectacle-marks-on-back-of-the-hood-naja-naja-satara-gm1464050158-496851202?utm_campaign=srp_photos_limitedresults&utm_content=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhites%2F&utm_medium=affiliate&utm_source=pexels&utm_term=hites'
            },
            {
              "id": 2,
              "name": "chair-wooden",
              "price": 150,
              "image": "https://www.istockphoto.com/photo/wooden-chair-gm1174450102-325183257"
            },
            {
              "id": 3,
              "name": "lamp-metal",
              "price": 80,
              "image": "https://www.istockphoto.com/photo/modern-metal-lamp-gm1134054807-302989015"
            },
            {
              "id": 4,
              "name": "sofa-leather",
              "price": 500,
              "image": "https://www.istockphoto.com/photo/leather-sofa-gm1042242878-275256531"
            },
            {
              "id": 5,
              "name": "bed-frame",
              "price": 700,
              "image": "https://www.istockphoto.com/photo/wooden-bed-frame-gm1014450906-274179601"
            },
            {
              "id": 6,
              "name": "desk-glass",
              "price": 300,
              "image": "https://www.istockphoto.com/photo/glass-desk-gm1194452502-325186057"
            },
            {
              "id": 7,
              "name": "bookshelf-metal",
              "price": 200,
              "image": "https://www.istockphoto.com/photo/metal-bookshelf-gm1101194234-295287613"
            },
            {
              "id": 8,
              "name": "cabinet-wooden",
              "price": 400,
              "image": "https://www.istockphoto.com/photo/wooden-cabinet-gm1050254802-294193315"
            },
            {
              "id": 9,
              "name": "table-glass",
              "price": 350,
              "image": "https://www.istockphoto.com/photo/glass-table-gm1012345732-271195303"
            },
            {
              "id": 10,
              "name": "drawer-set",
              "price": 250,
              "image": "https://www.istockphoto.com/photo/wooden-drawer-set-gm1199051285-342183050"
            }
          ]
 
          //http://lcalhost:8088/api/products?search={productName}
          if(req.query.search){
            const filterProducts=products.filter(product=>product.name.includes(req.query.search))
            res.send(filterProducts);
            return ;
          }
          
          setTimeout(()=>{
            res.send(products);
          },3000);

    
})





const port =process.env.PORT|| 8088;

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});