import { ArrowRight, AlertTriangle, TrendingDown, Clock } from "lucide-react";
import inventoryStockCars from "@/assets/inventory-stock-cars.jpg";

export function PainSection() {
...
          {/* Lado Direito: Imagem Comercial Ocupando Tudo */}
          <div className="relative min-h-[600px] md:min-h-full overflow-hidden">
            <img 
              src={inventoryStockCars} 
              alt="Estoque de veículos seminovos alinhados em pátio comercial" 
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Overlay sutil para integração visual */}
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#F8F9FA]/80 to-transparent z-10 hidden md:block" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F8F9FA]/40 to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8F9FA]/40 to-transparent z-10" />
          </div>
        </div>
      </section>
      
      {/* Transição Suave para o Bloco 3 (#FFFFFF) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>

  );
}
