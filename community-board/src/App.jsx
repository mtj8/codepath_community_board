import './App.css';
import Header from './Header.jsx'
import Card from './Card.jsx'


const App = () => {
  return (
    <div className="App">
      <Header />
      <div class="container">
        <Card image={"https://www.allrecipes.com/thmb/Qi-NhMQIIA1hQj1AYkxu_sYIF_c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/traditional-filipino-lumpia-photo-by-kims-cooking-now-7535265-2000-6e3307802c804e8b890e89dd12e56efa.jpg"} 
          link={"https://www.allrecipes.com/recipe/35151/traditional-filipino-lumpia/"}
          name={"Lumpia"} />
        <Card image={"https://cdn.shortpixel.ai/spai2/w_1233+q_glossy+ret_img+to_auto/www.hungryhuy.com/wp-content/uploads/filipino-vs-american-bbq.jpg"}
          link={"https://www.hungryhuy.com/filipino-bbq-pork-skewers/"}
          name={"Filipino BBQ"} />
        <Card image={"https://www.foxyfolksy.com/wp-content/uploads/2014/09/longanisa.jpg"}
          link={"https://www.foxyfolksy.com/longanisa-recipe-filipino-sweet-sausage/"} 
          name={"Longganisa"} />
        <Card image={"https://whisperofyum.com/wp-content/uploads/2022/03/pancit-canton.jpg"} 
         link={"https://panlasangpinoy.com/pancit-canton-recipe/"}
         name={"Pancit canton"} />
        <Card image={"https://cdn.shortpixel.ai/spai2/w_1233+q_glossy+ret_img+to_auto/www.hungryhuy.com/wp-content/uploads/kare-kare-vertical.jpg"}
          link={"https://www.hungryhuy.com/kare-kare/"}
          name={"Kare-kare"} />
        <Card image={"https://images.themodernproper.com/production/posts/2022/Chicken-Adobo-8.jpeg?w=1200&q=82&auto=format&fit=crop&dm=1646167946&s=4cf49fcf9e315dab131b142a7ef0dd26"}
          link={"https://themodernproper.com/chicken-adobo"}
          name={"Chicken adobo"} />
        <Card image={"https://panlasangpinoy.com/wp-content/uploads/2022/09/sinigang-na-baboy.jpg"}
          link={"https://panlasangpinoy.com/pork-sinigang-na-baboy-recipe/"}
          name={"Sinigang"} />
        <Card image={"https://www.kawalingpinoy.com/wp-content/uploads/2018/12/pork-belly-lechon-4.jpg"}
          link={"https://www.kawalingpinoy.com/pork-belly-lechon-roll/"} 
          name={"Lechon"} />
        <Card image={"https://kitchenconfidante.com/wp-content/uploads/2018/10/Taho-Filipino-Silken-Tofu-with-Sago-kitchenconfidante.com-4637.jpg"}
          link={"https://kitchenconfidante.com/homemade-taho-recipe"}
          name={"Taho"} />
        <Card image={"https://www.foxyfolksy.com/wp-content/uploads/2015/09/pandesal.jpg"}
          link={"https://www.foxyfolksy.com/pandesal-recipe/"}
          name={"Pandesal"} />
        <Card image={"https://panlasangpinoy.com/wp-content/uploads/2010/03/How-to-Make-Rice-Cake-Bibingka.jpg"}
          link={"https://panlasangpinoy.com/rice-cake-bibingka-recipe/"}
          name={"Bibingka"} />
        <Card image={"https://assets.bonappetit.com/photos/60e46c6701084801b06de2a3/1:1/w_2240,c_limit/Halo-Halo-Recipe-2021.jpg"}
          link={"https://www.bonappetit.com/recipe/halo-halo"}
          name={"Halo-halo"} />
      </div>
    </div>
  )
}

export default App