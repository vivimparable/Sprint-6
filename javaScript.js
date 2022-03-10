
Vue.component('Button',{
    props:['numberHijoBoton'],
    template://html
     `<div>
        
     <button  @click="$emit('numeroLocal1', 1)"  class="btn btn-primary">Anterior</button>
    
     <button @click="$emit('numeroLocal2', 1)"  class="btn btn-outline-primary">Següent</button>

     </div>
     `, data(){
         return{
           
            methods:{
                
            }
         }
     } //si lo hago con mounted es estático.
     
});


Vue.component('Home',{
   
    template://html
    
     `<div>
            <div >
            
                <Button  @numeroLocal1="(n)=> numeroPadre<1 ? numeroPadre-=0 : numeroPadre-=1"

                @numeroLocal2="(n)=> numeroPadre>2 ? numeroPadre+=0 : numeroPadre+=1" 
                
                :numberHijoBoton ="numeroPadre" >
                
                </Button>

            

            </div>

     
     <Escena  :numberHijoEscena= "numeroPadre" :cuento.txt ="historia" ></Escena>
     

     </div>
     `,
    //ACORDARSE DE PONER LOS DOS PUNTITOS QUE SINO NO HACE BIEN


    data(){
        return{
            
            numeroPadre:0,
            
            historia: [
                {txt:"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial", 
                img:"/img/1.jpg"},
                {txt: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
                img:"/img/2.jpg"},
                {txt:"L'heroi va decidir travessar la porta que el portava a casa",
                img:"/img/3.jpg"},
                {txt:"Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
                img:"/img/4.jpg"}
            ],
            methods:{
            }
        }
        
    }
});

Vue.component('Escena',{
    props:['cuento','numberHijoEscena'],
    template://html
     `<div :style="{'background-image': 'url(' + cuento[numberHijoEscena].img + ')'}" class=" border border-primary border-4 p-5 bg-light"  >

     

            <p class="rounded-pill border p-3" v-for="(i, index) of cuento" :class=" {'bg-primary': index === numberHijoEscena}">
            {{i.txt}} - 
            </p>



      </div>
     `,


    data(){
        return{
           
        }
    }
});



new Vue({
    el:'#divPrincipal',
    
    data:{
        inici:true,
    }  
    })