import { SelectedPage, ClassType } from "@/shared/types"
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import Class from "./Class"

const classes :Array<ClassType> = [
    {
        name:"Ağırlık Çalışması Dersleri",
        description: "Ağırlık çalışması dersleri, vücut geliştirme ve güç kazanma amacıyla yapılan egzersizlerin öğretildiği derslerdir. Bu derslerde genellikle serbest ağırlık, makine ağırlığı veya vücut ağırlığı kullanılarak yapılan egzersizler öğretilir.",
        image:image1
    },
    {
        name:"Yoga Dersleri",
        description:"Yoga, beden ve zihin arasındaki dengeyi sağlamak, esneklik, güç ve rahatlama sağlamak amacıyla yapılan bir egzersiz ve meditasyon sistemidir. Yoga, farklı pozisyonlara (asanalara) ve nefes tekniklerine odaklanır.",
        image:image2
    },
    {
        name:"Karın Kası Dersleri",
        description: "Karın kaslarını hedefleyen bir egzersiz programıdır. Bu program, vücudun merkezini güçlendirmek, denge ve koordinasyonu artırmak, postürü düzeltmek ve karın kaslarını tonlamak için tasarlanmıştır.",
        image:image3
    },
    {
        name:"Macera Dersleri",
        
        image:image4
    },
    {
        name:"Fitness Dersleri",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet optio ratione aut repudiandae culpa dolore, provident sit. Esse dolorum dolore officia obcaecati quis corrupti reprehenderit ea",
        image:image5
    },
    {
        name:"Eğitim Dersleri",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet optio ratione aut repudiandae culpa dolore, provident sit. Esse dolorum dolore officia obcaecati quis corrupti reprehenderit ea",
        image:image6
    },
]


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section 
      className="w-full bg-primary-100 py-40"
      id="derslerimiz">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{once: true, amount:0.5}}
               transition={{delay:0.2, duration: 0.5}}
               variants={{
                   hidden:{opacity:0, x:-50},
                   visible:{opacity:1, x:0 }
               }}
              className="mx-auto w-5/6">
                <div className="md:w-3/5">
                    <HText>DERSLERİMİZ</HText>
                    <p className="py-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet optio ratione aut repudiandae culpa dolore, provident sit. Esse dolorum dolore officia obcaecati quis corrupti reprehenderit ea repellendus, qui placeat explicabo.</p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
              <ul className="w-[2800px] whitespace-nowrap">
               {classes.map((item: ClassType, index)=>(
                <Class 
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}/>
               ))}
              </ul>
            </div>
        </motion.div>
      </section>
  )
}

export default OurClasses